import cors from "cors";
import express from "express";
import helmet from "helmet";
import { createServer } from "http";
import createError from "http-errors";
import morgan from "morgan";
import * as dbDriver from "./driver/mongo";
import { apiRouter } from "./routes";
import { createSocket } from "./socket/init";
import { whitelist } from "./utils/cors-whitelist";
import { logger } from "./utils/logger";

const app = express();
const server = createServer(app);

app.use(
  cors({
    origin: whitelist,
    optionsSuccessStatus: 200,
  })
);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug for development
if (process.env.NODE_ENV === "development") {
  logger.info("Running on development mode");
  app.use(morgan("dev"));
}

// Init and connect to MongoDb
dbDriver.init();
dbDriver.connectDb(
  process.env.DB_HOST as string,
  parseInt(process.env.DB_PORT as string),
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string
);

// Api routes
app.use("/api", apiRouter);

// Create socket server
createSocket(server);

// Error handling
app.use((_req, _res, next) => {
  next(createError(401, "Please login to view this page."));
});

// Start http server
server.listen(8000, () => logger.info("The server is running"));
