import { Request, Response } from "express";
import { RefusePermissionOfRoleDto } from "../../dtos/grant_permission/refuse-permission-of-role-dto";
import { GrantPermissionModel } from "../../models/grant-permission-model";
import { logger } from "../../utils/logger";

async function refusePermissionOfRole(req: Request, res: Response) {
  const { roleId, permissionId }: RefusePermissionOfRoleDto = req.body;

  try {
    const grantPermission = await GrantPermissionModel.findOne({
      role: roleId,
      permission: permissionId,
    });
    if (!grantPermission) {
      throw new Error("Invalid request");
    }

    // Handle remove this document
    await grantPermission.delete();
    await grantPermission.save();

    // Ok, send response
    res.status(200).json({
      status: true,
      message: "Refuse Permission Success",
    });
  } catch (err) {
    logger.error("Refuse permission of role error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Refuse Permission Failed",
    });
  }
}

export { refusePermissionOfRole };
