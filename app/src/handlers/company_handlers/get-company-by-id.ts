import express from "express";
import { CompanyModel } from "../../models/company-model";
import { logger } from "../../utils/logger";

async function getCompanyById(
  req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const company = await CompanyModel.findById(req.params.id);
    res.status(200).json({
      status: true,
      message: "Get company by id success",
      company,
    });
  } catch (err) {
    logger.error("get company by id error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get company by id failed",
    });
  }
}

export { getCompanyById };
