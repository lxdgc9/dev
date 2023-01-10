import { Request, Response } from "express";
import { cloudinary } from "../../driver/cloudinary";
import { CreateCompanyDto } from "../../dtos/company/create-company-dto";
import { CompanyModel } from "../../models/company-model";
import { logger } from "../../utils/logger";

async function createCompany(req: Request, res: Response) {
  const { name }: CreateCompanyDto = req.body;

  try {
    // Create new company
    const newCompany = new CompanyModel({ name, logo: "hello world" });
    await newCompany.save();

    // Pass, upload image to cloud
    const upload = await cloudinary.uploader.upload(
      req.file?.buffer?.toString() || "",
      {
        public_id: "hello world 1",
        resource_type: "image",
      }
    );
    console.log(upload);

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
