import { Request, Response } from "express";
import { RoleModel } from "../../models/role-model";
import { logger } from "../../utils/logger";

async function getRoleList(_req: Request, res: Response) {
  try {
    const roleList = await RoleModel.find({});
    res.status(200).json({
      status: true,
      message: "Get Role List Success",
      roleList,
    });
  } catch (err) {
    logger.error("get role list error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get Role List Failed",
    });
  }
}

export { getRoleList };
