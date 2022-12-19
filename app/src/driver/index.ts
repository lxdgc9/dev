import mongoose from "mongoose";
import { logger } from "../utils/logger";

function init(): void {
  mongoose.set("strictQuery", true);
  mongoose.set("toJSON", {
    virtuals: false,
    transform: function(_doc, converted): void {
      delete converted.id;
    },
  });
}

function connectDb(
  host: string,
  port: number,
  db: string,
  username: string,
  password: string
): void {
  mongoose
    .connect(`mongodb://${host}:${port}/${db}`, {
      authSource: "admin",
      auth: {
        username,
        password,
      },
    })
    .then(() => logger.info("connected to db success"))
    .catch((err) => {
      logger.error("connect to db failed");
      console.log(err);
    });
}

export { init, connectDb };
