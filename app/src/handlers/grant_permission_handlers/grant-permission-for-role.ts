import { Request, Response } from "express";
import { GrantPermissionForRoleDto } from "../../dtos/grant_permission/grant-permission-for-role-dto";
import { GrantPermissionModel } from "../../models/grant-permission-model";
import { logger } from "../../utils/logger";

async function grantPermissionForRole(req: Request, res: Response) {
  const { roleId, permissionId }: GrantPermissionForRoleDto = req.body;

  try {
    // Grant permission, create document
    const newGrantPermission = new GrantPermissionModel({
      role: roleId,
      permission: permissionId,
    });
    await newGrantPermission.save();

    // Ok, send response
    res.status(201).json({
      status: true,
      message: "Grant Permission For Role Success",
    });
  } catch (err) {
    logger.error("Grant permission for role error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Grant Permission For Role Failed",
    });
  }
}

export { grantPermissionForRole };
