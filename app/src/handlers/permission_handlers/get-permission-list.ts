import express from "express";
import { PermissionModel } from "../../models/permission-model";
import { logger } from "../../utils/logger";

async function getPermissionList(
  _req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const permissionList = await PermissionModel.find({});
    res.status(200).json({
      status: true,
      message: "Get permission list success",
      permissionList,
    });
  } catch (err) {
    logger.error("get permission list error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get permission list failed",
    });
  }
}

export { getPermissionList };
