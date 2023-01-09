import { Schema, model } from "mongoose";
import { IRelationShip } from "./interfaces/relationship";

const schema = new Schema<IRelationShip>(
  {
    relatingUser: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    relatedUser: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    type: {
      type: String,
      trim: true,
      enum: ["friend", "block"],
      required: true,
    },
  },
  {
    collection: "Relationship",
    timestamps: true,
  }
);

const RelationShipModel = model("relationship", schema);

export { RelationShipModel };
