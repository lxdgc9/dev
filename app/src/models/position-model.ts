import mongoose from "mongoose";
import { IPosition } from "./interfaces/position";

const positionSchema = new mongoose.Schema<IPosition>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
});

const PositionModel = mongoose.model<IPosition & mongoose.Document>(
  "Position",
  positionSchema
);

export { PositionModel };
