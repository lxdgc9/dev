import express from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../@types/jwt-payload";
import { RequestWithUser } from "../@types/request-with-user";
import { logger } from "../utils/logger";

function verifyToken(
  req: RequestWithUser,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const headerAssertion = req.header("authorization") as string;
    if (!headerAssertion) {
      throw new Error("No authorization header");
    }
    const token = headerAssertion.split("Bearer ")[1];
    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY as string
    ) as JwtPayload;
    req.user = decoded;
    next();
  } catch (err) {
    logger.error("Verify token error");
    console.log(err);
    res.status(403).json({
      status: false,
      message: "Invalid Token",
    });
  }
}

export { verifyToken };
