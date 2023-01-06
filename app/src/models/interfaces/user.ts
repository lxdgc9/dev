import { Types } from "mongoose";

interface IUser {
  username: string;
  password: string;
  profile: Types.ObjectId;
  role: Types.ObjectId;
  isActive: boolean;

  comparePassword: comparePasswordFunction;
}

type comparePasswordFunction = (candidatePassword: string) => Promise<boolean>;

export { IUser };
