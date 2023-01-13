import cors from "cors";
import path from "path";
import helmet from "helmet";
import express from "express";
import morgan from "morgan";
import createError from "http-errors";
import * as dbDriver from "./driver/mongo";
import { apiRouter } from "./routes";
import { logger } from "./utils/logger";
import { corsWhiteList } from "./utils/cors-whitelist";

const app = express();

app.use(
  cors({
    origin: corsWhiteList(path.join(__dirname, "../whitelist")),
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

// Error handling
app.use((_req, _res, next) => {
  next(createError(401, "Please login to view this page."));
});

app.listen(8000, () => logger.info("The server is running"));
