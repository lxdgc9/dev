import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { logger } from "../utils/logger";
import { IUser } from "./interfaces/user";

const userSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

userSchema.pre("save", async function (next): Promise<void> {
  try {
    let user = this;
    if (!user.isModified("password")) {
      next();
      return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
  } catch (err) {
    logger.error("user password pre save error");
    console.log(err);
  }
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  try {
    const user = this as IUser;
    const isMatch = await bcrypt.compare(candidatePassword, user.password);
    return isMatch;
  } catch (err) {
    logger.error("compare password error");
    console.log(err);
    return false;
  }
};

const UserModel = mongoose.model<IUser & mongoose.Document>("User", userSchema);

export { UserModel };
