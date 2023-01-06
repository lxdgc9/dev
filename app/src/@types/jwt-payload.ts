import { Types } from "mongoose";

type JwtPayload = {
  id: Types.ObjectId;
  profileId: Types.ObjectId;
  roleId: Types.ObjectId;
  isActive: boolean;
};

export { JwtPayload };
