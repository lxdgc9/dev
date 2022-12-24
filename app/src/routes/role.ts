import express from "express";
import * as roleHandler from "../handlers/role_handlers";

const roleRouter = express.Router();

roleRouter.get("/", roleHandler.getRoleList);
roleRouter.get("/:id", roleHandler.getRoleById);
roleRouter.post("/", roleHandler.createRole);

export { roleRouter };
