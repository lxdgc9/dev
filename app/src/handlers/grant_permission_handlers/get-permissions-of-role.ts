import express from "express";
import { GrantPermissionModel } from "../../models/grant-permission-model";
import { logger } from "../../utils/logger";

async function getPermissionsOfRole(
  req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    // Get permissions of role
    const permissionIdListOfRole = await GrantPermissionModel.find({
      roleId: req.params.roleId,
    });

    // Populate permission list
    const permissionListOfRole = await GrantPermissionModel.populate(
      permissionIdListOfRole,
      "permissionId"
    );

    // Ok, map permission list and send repsonse
    const permissionList = permissionListOfRole.map((el) => el.permissionId);
    res.status(200).json({
      status: true,
      message: "Get permissions of role success",
      permissionList,
    });
  } catch (err) {
    logger.error("get permissions of role error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get permissions of role failed",
    });
  }
}

export { getPermissionsOfRole };
