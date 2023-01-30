import { Router } from "express";
import { getUserCredentials, login } from "../handlers/auth_handers";
import { verifyToken } from "../middlewares/verify-token";

const router = Router();

router.get("/user-credentials", verifyToken, getUserCredentials);
router.post("/login", login);

export { router as authRouter };
