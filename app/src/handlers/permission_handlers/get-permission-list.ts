import { Request, Response } from "express";
import { PermissionModel } from "../../models/permission-model";
import { logger } from "../../utils/logger";

async function getPermissionList(_req: Request, res: Response) {
  try {
    const permissionList = await PermissionModel.find({});
    res.status(200).json({
      status: true,
      message: "Get Permission List Success",
      permissionList,
    });
  } catch (err) {
    logger.error("Get permission list error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get Permission List Failed",
    });
  }
}

export { getPermissionList };
