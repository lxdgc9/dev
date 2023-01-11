import { Request, Response } from "express";
import { CreateCompanyDto } from "../../dtos/company/create-company-dto";
import { CompanyModel } from "../../models/company-model";
import { logger } from "../../utils/logger";
import { uploadFromBuffer } from "../../utils/upload-from-buffer";

async function createCompany(req: Request, res: Response) {
  const { name, logo }: CreateCompanyDto = req.body;

  try {
    // Create company and upload image by url
    if (logo) {
      const newCompany = new CompanyModel({ name, logo });
      await newCompany.save();

      // Ok, send response
      res.status(201).json({
        status: true,
        message: "Create Company Success",
        company: newCompany,
      });
      return;
    }

    // Upload logo to cloud
    const img = await uploadFromBuffer(req, {
      folder: "company",
      resource_type: "image",
      transformation: {
        width: 400,
        crop: "fill",
        gravity: "auto",
      },
    });

    // Create new company
    const newCompany = new CompanyModel({ name, logo: img.secure_url });
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
