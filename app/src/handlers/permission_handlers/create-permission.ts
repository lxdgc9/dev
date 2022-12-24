import express from "express";
import { CreatePermissionDto } from "../../dtos/permission/create-permission-dto";
import { PermissionModel } from "../../models/permission-model";
import { logger } from "../../utils/logger";

async function createPermission(
  req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const { name, code }: CreatePermissionDto = req.body;

    // Create new permission
    const newPermission = new PermissionModel({ name, code });
    await newPermission.save();

    // Ok, send response
    res.status(201).json({
      status: true,
      message: "Create permission success",
      permission: newPermission,
    });
  } catch (err) {
    logger.error("create permission error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Create permission failed",
    });
  }
}

export { createPermission };
