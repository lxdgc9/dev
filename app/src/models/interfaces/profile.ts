import mongoose from "mongoose";
import { Gender } from "../../@types/gender";

interface IProfile {
  name: string;
  dob: Date;
  gender: Gender;
  positionId: mongoose.Types.ObjectId;
  phone: string;
  avatar: string;
}

export { IProfile };
