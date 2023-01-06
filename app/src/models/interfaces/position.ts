import { Types } from "mongoose";

interface IPosition {
  name: string;
  company: Types.ObjectId;
}

export { IPosition };
