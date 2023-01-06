import { Schema, model } from "mongoose";
import { IRole } from "./interfaces/role";

// Define schema
const schema = new Schema<IRole>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { collection: "Role", timestamps: true }
);

// Create model
const RoleModel = model("role", schema);

export { RoleModel };
