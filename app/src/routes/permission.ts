import { Router } from "express";
import { PERMISSION_CODE } from "../constants/permission-code";
import {
  getPermissionList,
  getPermissionById,
  createPermission,
} from "../handlers/permission_handlers";
import { accessRole } from "../middlewares/access-role";
import { verifyToken } from "../middlewares/verify-token";

const router = Router();

router.get(
  "/",
  verifyToken,
  accessRole(PERMISSION_CODE.GET_USER, PERMISSION_CODE.CREATE_USER),
  getPermissionList
);
router.get("/:id", getPermissionById);
router.post("/", createPermission);

export { router as permissionRouter };
