import { Request, Response } from "express";
import { CompanyModel } from "../../models/company-model";
import { logger } from "../../utils/logger";

async function deleteCompanyById(req: Request, res: Response) {
  try {
    await CompanyModel.findByIdAndDelete(req.params.id);
    // Ok, send response
    res.status(200).json({
      status: true,
      message: "Delete Company Success",
    });
  } catch (err) {
    logger.error("Delete company by id error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Delete Company Failed",
    });
  }
}

export { deleteCompanyById };
