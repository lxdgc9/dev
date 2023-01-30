import { UploadApiOptions, UploadApiResponse } from "cloudinary";
import { Request } from "express";
import { createReadStream } from "streamifier";
import { cloudinary } from "../driver/cloudinary";

function uploadFromBuffer(
  req: Request,
  options: UploadApiOptions
): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (err, result) => {
      if (err) {
        return reject(err);
      }
      if (result) {
        resolve(result);
      }
    });
    createReadStream(req.file?.buffer as Buffer).pipe(stream);
  });
}

export { uploadFromBuffer };
