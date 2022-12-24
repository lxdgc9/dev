import mongoose from "mongoose";
import { IRole } from "./interfaces/role";

const roleSchema = new mongoose.Schema<IRole>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
});

const RoleModel = mongoose.model<IRole & mongoose.Document>("Role", roleSchema);

export { RoleModel };
