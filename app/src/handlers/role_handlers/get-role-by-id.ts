import { Request, Response } from "express";
import { RoleModel } from "../../models/role-model";
import { logger } from "../../utils/logger";

async function getRoleById(req: Request, res: Response) {
  try {
    const role = await RoleModel.findById(req.params.id);
    res.status(200).json({
      status: true,
      message: "Get Role Success",
      role,
    });
  } catch (err) {
    logger.error("Get role by id error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get Role Failed",
    });
  }
}

export { getRoleById };
