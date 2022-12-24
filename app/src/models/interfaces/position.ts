import mongoose from "mongoose";

interface IPosition {
  name: string;
  companyId: mongoose.Types.ObjectId;
}

export { IPosition };
