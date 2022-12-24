import cors from "cors";
import helmet from "helmet";
import express, { Application } from "express";
import * as driver from "./driver";
import { router as apiRouter } from "./routes";
import { logger } from "./utils/logger";
import { debug } from "./middlewares/debug";

// Async/await on top level
async function main(): Promise<void> {
  const app: Application = express();

  // Init middleware
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Db setup and connect
  driver.init();
  driver.connectDb(
    process.env.DB_HOST as string,
    parseInt(process.env.DB_PORT as string),
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASS as string
  );

  // Debug for development
  if (process.env.NODE_ENV === "development") {
    logger.info("app running on development mode");
    app.use(debug);
  }

  // Api routing
  app.use("/api", apiRouter);

  // Start the server
  app.listen(8000, () => logger.info("app is running"));
}

main();
