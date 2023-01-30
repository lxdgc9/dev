import fs from "fs";
import path from "path";
import { logger } from "./logger";

const FILENAME = path.join(__dirname, "../whitelist");

let whitelist: string[] | "*" = "*";

if (!fs.existsSync(FILENAME)) {
  logger.warn("Whitelist not found, use allow origin: all");
} else {
  whitelist = fs.readFileSync(FILENAME).toString("utf8").split("\n");
}

export { whitelist };
