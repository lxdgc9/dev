import { Request } from "express";
import { cloudinary } from "../driver/cloudinary";
import { createReadStream } from "streamifier";
import { UploadApiResponse } from "cloudinary";

type Options = {
  folder: string;
};

function uploadFromBuffer(
  req: Request,
  options: Options
): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      options,
      (err, result) => {
        if (err) {
          return reject(err);
        }
        if (result) {
          resolve(result);
        }
      }
    );
    createReadStream(req.file?.buffer as Buffer).pipe(stream);
  });
}

export { uploadFromBuffer };
