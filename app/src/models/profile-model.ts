import mongoose from "mongoose";
import { Gender } from "../@types/gender";
import { IProfile } from "./interfaces/profile";

const profileSchema = new mongoose.Schema<IProfile>({
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
    enum: [Gender.male, Gender.female],
    required: true,
  },
  positionId: {
    type: mongoose.Schema.Types.ObjectId,
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
});

const ProfileModel = mongoose.model<IProfile & mongoose.Document>(
  "Profile",
  profileSchema
);

export { ProfileModel };
