import { Request, Response } from "express";
import { GrantPermissionModel } from "../../models/grant-permission-model";
import { logger } from "../../utils/logger";

async function getPermissionsOfRole(req: Request, res: Response) {
  try {
    // Get permissions of role
    const permissionIdListOfRole = await GrantPermissionModel.find({
      roleId: req.params.roleId,
    });

    // Populate permission list
    const permissionListOfRole = await GrantPermissionModel.populate(
      permissionIdListOfRole,
      "permission"
    );

    // Ok, map permission list and send repsonse
    const permissionList = permissionListOfRole.map((el) => el.permission);
    res.status(200).json({
      status: true,
      message: "Get Permissions Role Success",
      permissionList,
    });
  } catch (err) {
    logger.error("Get permissions of role error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get Permissions Of Role Failed",
    });
  }
}

export { getPermissionsOfRole };
