import { Request, Response } from "express";
import { CompanyModel } from "../../models/company-model";
import { logger } from "../../utils/logger";

async function getCompanyById(req: Request, res: Response) {
  try {
    const company = await CompanyModel.findById(req.params.id);
    res.status(200).json({
      status: true,
      message: "Get Company Success",
      company,
    });
  } catch (err) {
    logger.error("Get company by id error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get Company Failed",
    });
  }
}

export { getCompanyById };
