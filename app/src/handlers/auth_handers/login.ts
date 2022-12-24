import express from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../../@types/jwt-payload";
import { LoginDto } from "../../dtos/auth/login-dto";
import { UserModel } from "../../models/user-model";
import { logger } from "../../utils/logger";

async function login(
  req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const { username, password }: LoginDto = req.body;

    // Check username duplicate
    const user = await UserModel.findOne({ username });
    if (!user) {
      throw new Error("user not found");
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error("wrong password");
    }

    // Ok, create token and send response
    const token = jwt.sign(
      {
        id: user.id,
        profileId: user.profileId,
        roleId: user.roleId,
        isActive: user.isActive,
      } as JwtPayload,
      process.env.SECRET_KEY as string,
      { expiresIn: "2d" }
    );
    res.status(200).json({
      status: true,
      message: "Login success",
      accessToken: token,
      user,
    });
  } catch (err) {
    logger.error("login error");
    console.log(err);
    res.status(403).json({
      status: false,
      message: "Login failed",
    });
  }
}

export { login };
