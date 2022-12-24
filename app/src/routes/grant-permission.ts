import express from "express";
import * as grantPermissionHandler from "../handlers/grant_permission_handlers";

const grantPermissionRouter = express.Router();

grantPermissionRouter.get(
  "/:roleId",
  grantPermissionHandler.getPermissionsOfRole
);
grantPermissionRouter.post("/", grantPermissionHandler.grantPermissionForRole);

export { grantPermissionRouter };
