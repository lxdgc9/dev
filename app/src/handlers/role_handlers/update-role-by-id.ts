import { Request, Response } from "express";
import { UpdateRoleDto } from "../../dtos/role/update-role-dto";
import { RoleModel } from "../../models/role-model";
import { logger } from "../../utils/logger";

async function updateRoleById(req: Request, res: Response) {
  const { name }: UpdateRoleDto = req.body;

  try {
    await RoleModel.findByIdAndUpdate(req.params.id, { name });
    res.status(200).json({
      status: true,
      message: "Update Role Success",
    });
  } catch (err) {
    logger.error("Update role by id error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Update Role Failed",
    });
  }
}

export { updateRoleById };
