import express from "express";
import { logger } from "../utils/logger";

function debug(
  req: express.Request,
  _res: express.Response,
  next: express.NextFunction
): void {
  logger.debug(`${req.method} ${req.path}`);
  next();
}

export { debug };
