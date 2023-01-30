import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { JwtPayload } from "../../@types/jwt-payload";
import { LoginDto } from "../../dtos/auth/login-dto";
import { UserModel } from "../../models/user-model";
import { logger } from "../../utils/logger";

async function login(req: Request, res: Response) {
  const { username, password }: LoginDto = req.body;

  try {
    // Check username duplicate
    const user = await UserModel.findOne({ username });
    if (!user) {
      throw new Error("User not found");
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error("Wrong password");
    }

    // Ok, create token and send response
    const token = sign(
      {
        id: user.id,
        profileId: user.profile,
        roleId: user.role,
        isActive: user.isActive,
      } as JwtPayload,
      process.env.SECRET_KEY as string,
      { expiresIn: "7d" }
    );
    res.status(200).json({
      status: true,
      message: "Login Success",
      accessToken: token,
      user,
    });
  } catch (err) {
    logger.error("Login error");
    console.log(err);
    res.status(403).json({
      status: false,
      message: "Login Failed",
    });
  }
}

export { login };
