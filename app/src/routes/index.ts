import express from "express";
import { authRouter } from "./auth";
import { grantPermissionRouter } from "./grant-permission";
import { permissionRouter } from "./permission";
import { roleRouter } from "./role";
import { userRouter } from "./user";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/permissions", permissionRouter);
router.use("/roles", roleRouter);
router.use("/grant-permission", grantPermissionRouter);
router.use("/users", userRouter);

export { router };
