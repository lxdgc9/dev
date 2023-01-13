import { Request, Response } from "express";
import { UpdateCompanyDto } from "../../dtos/company/update-company-dto";
import { CompanyModel } from "../../models/company-model";
import { logger } from "../../utils/logger";
import { uploadFromBuffer } from "../../utils/upload-from-buffer";

type UpdatePayload = {
  name?: string;
  logo?: string;
};

async function updateCompanyById(req: Request, res: Response) {
  const { name }: UpdateCompanyDto = req.body;

  try {
    // Check company id
    let company = await CompanyModel.findById(req.params.id);
    if (!company) {
      throw new Error("Company not found");
    }

    // Handle get image url
    let updatePayload: UpdatePayload = { name };
    if (req.file) {
      const img = await uploadFromBuffer(req, {
        folder: `company/${company.id}`,
        resource_type: "image",
        transformation: {
          width: 400,
          crop: "fill",
          gravity: "auto",
        },
      });
      updatePayload = {
        ...updatePayload,
        logo: img.secure_url,
      };
    }

    // Ok, update, save and send response
    await company.updateOne(updatePayload);
    await company.save();
    res.status(200).json({
      status: true,
      message: "Update Company Success",
    });
  } catch (err) {
    logger.error("Update company by id error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Update Company Failed",
    });
  }
}

export { updateCompanyById };
