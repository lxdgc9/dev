import mongoose from "mongoose";

interface IPosition {
  label: string;
  companyId: mongoose.Types.ObjectId;
}

export { IPosition };
