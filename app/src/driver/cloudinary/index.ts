import { v2 as cloudinary } from "cloudinary";
import { logger } from "../../utils/logger";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
  secure: true,
});

cloudinary.api
  .ping()
  .then((res) => logger.info(`Cloudinary connection: ${res.status}`))
  .catch((err) => {
    logger.error("Cloudinary connection failed");
    console.log(err);
  });

export { cloudinary };
