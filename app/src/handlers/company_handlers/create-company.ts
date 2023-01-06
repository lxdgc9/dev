import { Request, Response } from "express";
import { CreateCompanyDto } from "../../dtos/company/create-company-dto";
import { CompanyModel } from "../../models/company-model";
import { logger } from "../../utils/logger";

async function createCompany(req: Request, res: Response) {
  const { name, logo }: CreateCompanyDto = req.body;

  try {
    // Create new company
    const newCompany = new CompanyModel({ name, logo });
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
