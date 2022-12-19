import mongoose from "mongoose";

enum Gender {
  male = "male",
  female = "female",
}

interface IProfile {
  name: string;
  dob: Date;
  gender: Gender;
  positionId: mongoose.Types.ObjectId;
  phone: string;
  avatar: string;
}

export { IProfile };
