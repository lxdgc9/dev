import { Schema, model } from "mongoose";
import { IGrantPermission } from "./interfaces/grant-permission";

// Define schema
const schema = new Schema<IGrantPermission>(
  {
    role: {
      type: Schema.Types.ObjectId,
      ref: "role",
      required: true,
    },
    permission: {
      type: Schema.Types.ObjectId,
      ref: "permission",
      required: true,
    },
  },
  { collection: "Grant Permission", timestamps: true }
);

// Create model
const GrantPermissionModel = model("grant-permission", schema);

export { GrantPermissionModel };
