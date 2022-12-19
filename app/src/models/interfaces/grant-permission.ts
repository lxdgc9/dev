import mongoose from "mongoose";

interface IGrantPermission {
  roleId: mongoose.Types.ObjectId;
  permissionId: mongoose.Types.ObjectId;
}

export { IGrantPermission };
