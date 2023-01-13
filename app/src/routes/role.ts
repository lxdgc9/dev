import { Router } from "express";
import {
  getRoleList,
  getRoleById,
  createRole,
  updateRoleById,
  deleteRoleById,
} from "../handlers/role_handlers";

const router = Router();

router.get("/", getRoleList);
router.get("/:id", getRoleById);
router.post("/", createRole);
router.put("/:id", updateRoleById);
router.delete("/:id", deleteRoleById);

export { router as roleRouter };
