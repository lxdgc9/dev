import { Schema, model } from "mongoose";
import { IPermission } from "./interfaces/permission";

// Define schema
const schema = new Schema<IPermission>(
  {
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
  },
  { collection: "Permission", timestamps: true }
);

// Create model
const PermissionModel = model("permission", schema);

export { PermissionModel };
