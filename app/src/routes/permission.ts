import express from "express";
import { PERMISSION_CODE } from "../constants/permission-code";
import * as permissionHandler from "../handlers/permission_handlers";
import { accessRole } from "../middlewares/access-role";
import { verifyToken } from "../middlewares/verify-token";

const permissionRouter = express.Router();

permissionRouter.get(
  "/",
  verifyToken,
  accessRole(PERMISSION_CODE.GET_USER, PERMISSION_CODE.CREATE_USER),
  permissionHandler.getPermissionList
);
permissionRouter.get("/:id", permissionHandler.getPermissionById);
permissionRouter.post("/", permissionHandler.createPermission);

export { permissionRouter };
