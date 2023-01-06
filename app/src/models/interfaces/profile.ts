import { Types } from "mongoose";

interface IProfile {
  name: string;
  dob: Date;
  gender: "male" | "female";
  position: Types.ObjectId;
  phone: string;
  avatar: string;
}

export { IProfile };
