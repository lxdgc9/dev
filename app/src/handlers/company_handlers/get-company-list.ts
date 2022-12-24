import express from "express";
import { CompanyModel } from "../../models/company-model";
import { logger } from "../../utils/logger";

async function getCompanyList(
  _req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const companyList = await CompanyModel.find({});
    res.status(200).json({
      status: true,
      message: "Get company success",
      companyList,
    });
  } catch (err) {
    logger.error("get company error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get company failed",
    });
  }
}

export { getCompanyList };
