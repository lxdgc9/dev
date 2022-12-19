import express from "express";
import { RequestWithUser } from "../../@types/request-with-user";
import { UserModel } from "../../models/user-model";
import { logger } from "../../utils/logger";

async function getUserCredentials(
  req: RequestWithUser,
  res: express.Response
): Promise<void> {
  try {
    // Requirements
    if (!req.user) {
      throw new Error("require verify token middleware");
    }

    // Get user from access token
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      throw new Error("user not found");
    }

    // Ok
    res.status(200).json({
      status: true,
      message: "Get user credentials success",
      user,
    });
  } catch (err) {
    logger.error("get user credentials error");
    console.log(err);
    res.status(403).json({
      status: false,
      message: "Get user credentials failed",
    });
  }
}

export { getUserCredentials };
