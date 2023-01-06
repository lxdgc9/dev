import express from "express";
import { RequestWithUser } from "../@types/request-with-user";
import { GrantPermissionModel } from "../models/grant-permission-model";
import { logger } from "../utils/logger";

function accessRole(...permissions: number[]) {
  return async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      // Requirements
      if (!req.user) {
        throw new Error("Require token");
      }

      // Get permissions list of user
      const permissionList = await GrantPermissionModel.find({
        roleId: req.user.roleId,
      });
      const permissionListPopulatePermission =
        await GrantPermissionModel.populate(permissionList, "permissionId");

      //
      console.log(permissionListPopulatePermission);
      console.log(permissions);
      next();
    } catch (err) {
      logger.error("Access role error");
      console.log(err);
      res.status(401).json({
        status: false,
        message: "Unauthorized",
      });
    }
  };
}

export { accessRole };
