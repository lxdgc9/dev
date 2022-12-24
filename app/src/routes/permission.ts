import express from "express";
import * as permissionHandler from "../handlers/permission_handlers";

const permissionRouter = express.Router();

permissionRouter.get("/", permissionHandler.getPermissionList);
permissionRouter.get("/:id", permissionHandler.getPermissionById);
permissionRouter.post("/", permissionHandler.createPermission);

export { permissionRouter };
