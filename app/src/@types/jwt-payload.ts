import mongoose from "mongoose";

type JwtPayload = {
  id: mongoose.Types.ObjectId;
  profileId: mongoose.Types.ObjectId;
  roleId: mongoose.Types.ObjectId;
  isActive: boolean;
};

export { JwtPayload };
