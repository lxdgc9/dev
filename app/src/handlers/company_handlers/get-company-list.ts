import { Request, Response } from "express";
import { CompanyModel } from "../../models/company-model";
import { logger } from "../../utils/logger";

async function getCompanyList(_req: Request, res: Response) {
  try {
    const companyList = await CompanyModel.find({});
    res.status(200).json({
      status: true,
      message: "Get Company List Success",
      companyList,
    });
  } catch (err) {
    logger.error("Get company list error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get Company List Failed",
    });
  }
}

export { getCompanyList };
