import { Request, Response } from "express";
import { cloudinary } from "../../driver/cloudinary";
import { CreateUserDto } from "../../dtos/user/create-user-dto";
import { CompanyModel } from "../../models/company-model";
import { PositionModel } from "../../models/position-model";
import { ProfileModel } from "../../models/profile-model";
import { UserModel } from "../../models/user-model";
import { logger } from "../../utils/logger";
import { uploadFromBuffer } from "../../utils/upload-from-buffer";

async function createUser(req: Request, res: Response) {
  try {
    const {
      username,
      password,
      name,
      dob,
      gender,
      positionId,
      phone,
      roleId,
      isActive,
    }: CreateUserDto = req.body;

    // Handle upload avatar
    let avatar: string = "";
    const newProfile = new ProfileModel({
      name,
      dob,
      gender,
      position: positionId,
      phone,
      avatar,
    });
    if (req.file) {
      const img = await uploadFromBuffer(req, {
        folder: `profile/${newProfile.id}`,
        resource_type: "image",
        transformation: {
          width: 400,
          gravity: "auto",
          crop: "fill",
        },
      });
      avatar = img.secure_url;
    } else {
      const position = await PositionModel.findById(positionId);
      const company = await CompanyModel.findById(position?.company);
      if (!company) {
        throw new Error("Company not found");
      }
      const img = await cloudinary.uploader.upload(company.logo as string, {
        folder: `profile/${newProfile.id}`,
        resource_type: "image",
        transformation: {
          width: 400,
          gravity: "auto",
          crop: "fill",
        },
      });
      avatar = img.secure_url;
    }
    newProfile.avatar = avatar;

    const newUser = new UserModel({
      username,
      password,
      profile: newProfile.id,
      role: roleId,
      isActive,
    });

    // Save
    await newProfile.save();
    await newUser.save();

    // Ok, send response
    res.status(201).json({
      status: true,
      message: "Create User Success",
      user: newUser,
    });
  } catch (err) {
    logger.error("Create user error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Create User Failed",
    });
  }
}

export { createUser };
