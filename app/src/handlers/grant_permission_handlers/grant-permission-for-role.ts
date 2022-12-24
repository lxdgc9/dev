import express from "express";
import { GrantPermissionForRoleDto } from "../../dtos/grant_permission/grant-permission-for-role-dto";
import { GrantPermissionModel } from "../../models/grant-permission-model";
import { logger } from "../../utils/logger";

async function grantPermissionForRole(
  req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const { roleId, permissionId }: GrantPermissionForRoleDto = req.body;

    // Grant permission, create document
    const newGrantPermission = new GrantPermissionModel({
      roleId,
      permissionId,
    });
    await newGrantPermission.save();

    // Ok, send response
    res.status(201).json({
      status: true,
      message: "Grant permission for role success",
    });
  } catch (err) {
    logger.error("grant permission for role error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Grant permission for role failed",
    });
  }
}

export { grantPermissionForRole };
