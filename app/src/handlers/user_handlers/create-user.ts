import { Request, Response } from "express";
import { CreateUserDto } from "../../dtos/user/create-user-dto";
import { CompanyModel } from "../../models/company-model";
import { PositionModel } from "../../models/position-model";
import { ProfileModel } from "../../models/profile-model";
import { UserModel } from "../../models/user-model";
import { logger } from "../../utils/logger";

async function createUser(req: Request, res: Response) {
  try {
    const { username, password, profile, roleId, isActive }: CreateUserDto =
      req.body;

    // Create new profile and user async/await
    let { name, dob, gender, positionId, phone, avatar } = profile;
    if (!avatar) {
      const position = await PositionModel.findById(positionId);
      if (!position) {
        throw new Error("Invalid position");
      }
      const company = await CompanyModel.findById(position.company);
      avatar = company ? company.logo : "/default-logo.png";
    }
    const newProfile = new ProfileModel({
      name,
      dob,
      gender,
      positionId,
      phone,
      avatar,
    });
    const newUser = new UserModel({
      username,
      password,
      profileId: newProfile.id,
      roleId,
      isActive,
    });

    // Save
    await newUser.save();
    await newProfile.save();

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
