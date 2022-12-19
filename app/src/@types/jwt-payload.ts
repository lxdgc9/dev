import mongoose from "mongoose";

type JwtPayload = {
  id: mongoose.Types.ObjectId;
};

export { JwtPayload };
