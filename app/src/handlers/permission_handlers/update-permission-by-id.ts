import { Request, Response } from "express";
import { UpdatePermissionDto } from "../../dtos/permission/update-permission-dto";
import { PermissionModel } from "../../models/permission-model";
import { logger } from "../../utils/logger";

async function updatePermissionById(req: Request, res: Response) {
  const { name, code }: UpdatePermissionDto = req.body;
  try {
    await PermissionModel.findByIdAndUpdate(req.params.id, { name, code });
    res.status(200).json({
      status: true,
      message: "Update Permission Success",
    });
  } catch (err) {
    logger.error("Update permission by id error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Update Permission Failed",
    });
  }
}

export { updatePermissionById };
