import express from "express";
import { PermissionModel } from "../../models/permission-model";
import { logger } from "../../utils/logger";

async function getPermissionById(
  req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const permission = await PermissionModel.findById(req.params.id);
    res.status(200).json({
      status: true,
      message: "Get permission success",
      permission,
    });
  } catch (err) {
    logger.error("get permission error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get permission failed",
    });
  }
}

export { getPermissionById };
