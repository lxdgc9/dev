import { Router } from "express";
import { verifyToken } from "../middlewares/verify-token";
import { getUserCredentials, login } from "../handlers/auth_handers";

const router = Router();

router.get("/user-credentials", verifyToken, getUserCredentials);
router.post("/login", login);

export { router as authRouter };
