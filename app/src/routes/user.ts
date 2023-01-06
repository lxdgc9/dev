import { Router } from "express";
import { createUser } from "../handlers/user_handlers";

const router = Router();

router.post("/", createUser);

export { router as userRouter };
