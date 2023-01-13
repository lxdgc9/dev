import { Request, Response } from "express";
import { RoleModel } from "../../models/role-model";
import { logger } from "../../utils/logger";

async function deleteRoleById(req: Request, res: Response) {
  try {
    await RoleModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: true,
      message: "Delete Role Success",
    });
  } catch (err) {
    logger.error("Delete role by id error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Delete Role Failed",
    });
  }
}

export { deleteRoleById };
