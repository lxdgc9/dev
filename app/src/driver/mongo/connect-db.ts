import mongoose from "mongoose";
import { logger } from "../../utils/logger";

function connectDb(
  host: string,
  port: number,
  db: string,
  username: string,
  password: string
) {
  mongoose
    .connect(`mongodb://${host}:${port}/${db}`, {
      authSource: "admin",
      auth: { username, password },
    })
    .then(() => logger.info("Connect to MongoDb success"))
    .catch((err) => {
      logger.error("Connect to MongoDb failed");
      console.log(err);
    });
}

export { connectDb };
