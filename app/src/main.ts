import cors from "cors";
import helmet from "helmet";
import express from "express";
import * as dbDriver from "./driver/mongo";
import { apiRouter } from "./routes";
import { logger } from "./utils/logger";
import morgan from "morgan";
import createError from "http-errors";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Init and connect to MongoDb
dbDriver.init();
dbDriver.connectDb(
  process.env.DB_HOST as string,
  parseInt(process.env.DB_PORT as string),
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string
);

// Debug for development
if (process.env.NODE_ENV === "development") {
  logger.info("Running on development mode");
  app.use(morgan("dev"));
}

// Api routes
app.use("/api", apiRouter);

// Error handling
app.use((_req, _res, next) => {
  next(createError[400]);
});

app.listen(8000, () => logger.info("The server is running"));
