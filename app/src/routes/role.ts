import { Router } from "express";
import {
  getRoleList,
  getRoleById,
  createRole,
} from "../handlers/role_handlers";

const router = Router();

router.get("/", getRoleList);
router.get("/:id", getRoleById);
router.post("/", createRole);

export { router as roleRouter };
