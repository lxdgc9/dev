import { Response } from "express";
import { RequestWithUser } from "../../@types/request-with-user";
import { UserModel } from "../../models/user-model";
import { logger } from "../../utils/logger";

async function getUserCredentials(req: RequestWithUser, res: Response) {
  try {
    // Requirements
    if (!req.user) {
      throw new Error("Require token");
    }

    // Get user from access token
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      throw new Error("User not found");
    }

    // Ok, send user credentials
    res.status(200).json({
      status: true,
      message: "Get User Credentials Success",
      user,
    });
  } catch (err) {
    logger.error("Get user credentials error");
    console.log(err);
    res.status(403).json({
      status: false,
      message: "Get User Credentials Failed",
    });
  }
}

export { getUserCredentials };
