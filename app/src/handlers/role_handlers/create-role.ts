import express from "express";
import { CreateRoleDto } from "../../dtos/role/create-role-dto";
import { RoleModel } from "../../models/role-model";
import { logger } from "../../utils/logger";

async function createRole(
  req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const { name }: CreateRoleDto = req.body;

    // Create new role
    const newRole = new RoleModel({ name });
    await newRole.save();

    // Ok, send response
    res.status(201).json({
      status: true,
      message: "Create role success",
      role: newRole,
    });
  } catch (err) {
    logger.error("create role error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Create role failed",
    });
  }
}

export { createRole };
