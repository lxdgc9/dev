import express from "express";
import { RequestWithUser } from "../@types/request-with-user";
import { logger } from "../utils/logger";

function accessRole(...permissions: number[]): express.RequestHandler {
  return async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> => {
    try {
      // Requirements
      if (!req.user) {
        throw new Error("Require access token");
      }

      //
      console.log(permissions);
      next();
    } catch (err) {
      logger.error("access role error");
      console.log(err);
      res.status(401).json({
        status: false,
        message: "Unauthorized",
      });
    }
  };
}

export { accessRole };
