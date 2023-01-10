import fs from "fs";
import { logger } from "./logger";

function corsWhiteList(filename: string) {
  if (!fs.existsSync(filename)) {
    logger.warn("Whitelist not found, use allow origin: all");
    return "*";
  }

  logger.debug("Whitelist enabled");
  const whitelist = fs.readFileSync(filename).toString("utf8").split("\n");
  return whitelist;
}

export { corsWhiteList };
