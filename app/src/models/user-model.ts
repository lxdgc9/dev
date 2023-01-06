import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { logger } from "../utils/logger";
import { IUser } from "./interfaces/user";

// Define schema
const schema = new Schema<IUser>({
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
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

// Middlewares
schema.pre("save", async function (next): Promise<void> {
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
    logger.error("Cannot hash password");
    console.log(err);
  }
});

schema.methods = {
  comparePassword: async function (candidatePassword: string) {
    try {
      const user = this as IUser;
      const isMatch = await bcrypt.compare(candidatePassword, user.password);
      return isMatch;
    } catch (err) {
      logger.error("Compare password error");
      console.log(err);
      return false;
    }
  },
};

// Create model
const UserModel = model("user", schema);

export { UserModel };
