import { Router } from "express";
import {
  getPermissionsOfRole,
  grantPermissionForRole,
  refusePermissionOfRole,
} from "../handlers/grant_permission_handlers";

const router = Router();

router.get("/:roleId", getPermissionsOfRole);
router.post("/", grantPermissionForRole);
router.post("/refuse", refusePermissionOfRole);

export { router as grantPermissionRouter };
