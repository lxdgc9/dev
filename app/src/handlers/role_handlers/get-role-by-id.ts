import express from "express";
import { RoleModel } from "../../models/role-model";
import { logger } from "../../utils/logger";

async function getRoleById(
  req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const role = await RoleModel.findById(req.params.id);
    res.status(200).json({
      status: true,
      message: "Get role by id success",
      role,
    });
  } catch (err) {
    logger.error("get role by id error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get role by id failed",
    });
  }
}

export { getRoleById };
