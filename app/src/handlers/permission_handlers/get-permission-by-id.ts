import { Request, Response } from "express";
import { PermissionModel } from "../../models/permission-model";
import { logger } from "../../utils/logger";

async function getPermissionById(req: Request, res: Response) {
  try {
    const permission = await PermissionModel.findById(req.params.id);
    res.status(200).json({
      status: true,
      message: "Get Permission Success",
      permission,
    });
  } catch (err) {
    logger.error("Get permission error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get Permission Failed",
    });
  }
}

export { getPermissionById };
