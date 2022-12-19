import express from "express";
import { JwtPayload } from "./jwt-payload";

type RequestWithUser = express.Request & {
  user?: JwtPayload;
};

export { RequestWithUser };
