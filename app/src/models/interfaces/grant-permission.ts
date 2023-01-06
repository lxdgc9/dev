import { Types } from "mongoose";

interface IGrantPermission {
  role: Types.ObjectId;
  permission: Types.ObjectId;
}

export { IGrantPermission };
