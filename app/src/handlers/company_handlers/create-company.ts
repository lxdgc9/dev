import express from "express";
import { CreateCompanyDto } from "../../dtos/company/create-company-dto";
import { CompanyModel } from "../../models/company-model";
import { logger } from "../../utils/logger";

async function createCompany(
  req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const { name, logo }: CreateCompanyDto = req.body;

    // Create new company
    const newCompany = new CompanyModel({ name, logo });
    await newCompany.save();

    // Ok, send response
    res.status(201).json({
      status: true,
      message: "Create comany success",
      company: newCompany,
    });
  } catch (err) {
    logger.error("create company error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Create company failed",
    });
  }
}

export { createCompany };
