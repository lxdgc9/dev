import { Request, Response } from "express";
import { CreatePermissionDto } from "../../dtos/permission/create-permission-dto";
import { PermissionModel } from "../../models/permission-model";
import { logger } from "../../utils/logger";

async function createPermission(req: Request, res: Response) {
  const { name, code }: CreatePermissionDto = req.body;

  try {
    // Create new permission
    const newPermission = new PermissionModel({ name, code });
    await newPermission.save();

    // Ok, send response
    res.status(201).json({
      status: true,
      message: "Create Permission Success",
      permission: newPermission,
    });
  } catch (err) {
    logger.error("Create permission error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Create Permission Failed",
    });
  }
}

export { createPermission };
