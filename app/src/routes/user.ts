import express from "express";
import * as userHandler from "../handlers/user_handlers";

const userRouter = express.Router();

userRouter.post("/", userHandler.createUser);

export { userRouter };
