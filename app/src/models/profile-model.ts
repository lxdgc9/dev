import { Schema, model } from "mongoose";
import { IProfile } from "./interfaces/profile";

// Define schema
const schema = new Schema<IProfile>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    position: {
      type: Schema.Types.ObjectId,
      ref: "Position",
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  { collection: "Profile", timestamps: true }
);

// Create model
const ProfileModel = model("profile", schema);

export { ProfileModel };
