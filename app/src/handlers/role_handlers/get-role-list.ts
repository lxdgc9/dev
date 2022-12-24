import express from "express";
import { RoleModel } from "../../models/role-model";
import { logger } from "../../utils/logger";

async function getRoleList(
  _req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const roleList = await RoleModel.find({});
    res.status(200).json({
      status: true,
      roleList,
    });
  } catch (err) {
    logger.error("get role list error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get role list failed",
    });
  }
}

export { getRoleList };
