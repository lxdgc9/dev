import { Schema, model } from "mongoose";
import { IPosition } from "./interfaces/position";

// Define schema
const schema = new Schema<IPosition>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "company",
      required: true,
    },
  },
  { collection: "Position", timestamps: true }
);

// Create model
const PositionModel = model("position", schema);

export { PositionModel };
