import mongoose from "mongoose";
import { IGrantPermission } from "./interfaces/grant-permission";

const grantPermissionSchema = new mongoose.Schema<IGrantPermission>({
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: true,
  },
  permissionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Permission",
    required: true,
  },
});

const GrantPermissionModel = mongoose.model<
  IGrantPermission & mongoose.Document
>("Grant-Permission", grantPermissionSchema);

export { GrantPermissionModel };
