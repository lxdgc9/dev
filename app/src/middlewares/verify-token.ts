import express from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../@types/jwt-payload";
import { RequestWithUser } from "../@types/request-with-user";
import { logger } from "../utils/logger";

function verifyToken(
  req: RequestWithUser,
  res: express.Response,
  next: express.NextFunction
): void {
  try {
    const headerAssertion = req.header("Authorization") as string;
    if (!headerAssertion) {
      throw new Error("no authorization header");
    }
    const token = headerAssertion.split("Bearer ")[1];
    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY as string
    ) as JwtPayload;
    req.user = decoded;
    next();
  } catch (err) {
    logger.error("verify token error");
    console.log(err);
    res.status(403).json({
      status: false,
      message: "Invalid token",
    });
  }
}

export { verifyToken };
