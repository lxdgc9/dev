import express from "express";
import { verifyToken } from "../middlewares/verify-token";
import * as authHandler from "../handlers/auth_handers";

const authRouter = express.Router();

authRouter.get(
  "/user-credentials",
  verifyToken,
  authHandler.getUserCredentials
);
authRouter.post("/login", authHandler.login);

export { authRouter };
