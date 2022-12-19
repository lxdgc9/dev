import mongoose from "mongoose";
import { IPermission } from "./interfaces/permission";

const permissionSchema = new mongoose.Schema<IPermission>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  code: {
    type: Number,
    unique: true,
    required: true,
  },
});

const PermissionModel = mongoose.model<IPermission & mongoose.Document>(
  "Permission",
  permissionSchema
);

export { PermissionModel };
