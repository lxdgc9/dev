import mongoose from "mongoose";

interface IUser {
  username: string;
  password: string;
  profileId: mongoose.Types.ObjectId;
  roleId: mongoose.Types.ObjectId;
  isActive: boolean;

  comparePassword: comparePasswordFunction;
}

type comparePasswordFunction = (candidatePassword: string) => Promise<boolean>;

export { IUser };
