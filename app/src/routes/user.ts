import { Router } from "express";
import { createUser } from "../handlers/user_handlers";
import { uploader } from "../utils/uploader";

const router = Router();

router.post("/", uploader.single("avatar"), createUser);

export { router as userRouter };
