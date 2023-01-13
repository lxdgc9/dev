import { Request, Response } from "express";
import { CreateRoleDto } from "../../dtos/role/create-role-dto";
import { RoleModel } from "../../models/role-model";
import { logger } from "../../utils/logger";

async function createRole(req: Request, res: Response) {
  const { name }: CreateRoleDto = req.body;

  try {
    const newRole = new RoleModel({ name });
    await newRole.save();

    // Ok, send response
    res.status(201).json({
      status: true,
      message: "Create Role Success",
      role: newRole,
    });
  } catch (err) {
    logger.error("Create role error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Create Role Failed",
    });
  }
}

export { createRole };
