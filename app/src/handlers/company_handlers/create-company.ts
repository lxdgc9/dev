import { Request, Response } from "express";
import { CreateCompanyDto } from "../../dtos/company/create-company-dto";
import { CompanyModel } from "../../models/company-model";
import { logger } from "../../utils/logger";
import { uploadFromBuffer } from "../../utils/upload-from-buffer";

async function createCompany(req: Request, res: Response) {
  const { name }: CreateCompanyDto = req.body;
  try {
    // Require file upload
    if (!req.file) {
      throw new Error("Require upload logo");
    }
    // Handle upload image to cloud
    const newCompany = new CompanyModel();
    const img = await uploadFromBuffer(req, {
      folder: `company/${newCompany.id}`,
      resource_type: "image",
      transformation: {
        width: 400,
        gravity: "auto",
        crop: "fill",
      },
    });
    // Update document
    newCompany.name = name;
    newCompany.logo = img.secure_url;
    await newCompany.save();
    // Ok, send response
    res.status(201).json({
      status: true,
      message: "Create Company Success",
      company: newCompany,
    });
  } catch (err) {
    logger.error("Create company error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Create Company Failed",
    });
  }
}

export { createCompany };
