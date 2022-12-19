import winston, { format } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const FILENAME = "%DATE%.log";
const DIRNAME = "logs";

// Logger for console
const consoleTransport = new winston.transports.Console({
  format: format.combine(format.colorize(), format.simple()),
});

// Logger for file
const dailyRotateFileTransport = new DailyRotateFile({
  filename: FILENAME,
  dirname: DIRNAME,
});

const logger = winston.createLogger({
  level: "debug",
  transports: [consoleTransport, dailyRotateFileTransport],
});

export { logger };
