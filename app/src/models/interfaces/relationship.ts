import { Types } from "mongoose";

interface IRelationShip {
  relatingUser: Types.ObjectId;
  relatedUser: Types.ObjectId;
  type: "friend" | "block";
}

export { IRelationShip };
