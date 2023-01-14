import { Router } from "express";
import { PERMISSION_CODE } from "../constants/permission-code";
import {
  getPermissionList,
  getPermissionById,
  createPermission,
  updatePermissionById,
} from "../handlers/permission_handlers";
import { accessRole } from "../middlewares/access-role";
import { verifyToken } from "../middlewares/verify-token";

const router = Router();

router.get(
  "/",
  // verifyToken,
  // accessRole(PERMISSION_CODE.READ_PERMISSION),
  getPermissionList
);
router.get("/:id", getPermissionById);
router.post("/", createPermission);
router.put("/:id", updatePermissionById);

export { router as permissionRouter };
