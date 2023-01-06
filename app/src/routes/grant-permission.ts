import { Router } from "express";
import {
  getPermissionsOfRole,
  grantPermissionForRole,
} from "../handlers/grant_permission_handlers";

const router = Router();

router.get("/:roleId", getPermissionsOfRole);
router.post("/", grantPermissionForRole);

export { router as grantPermissionRouter };
