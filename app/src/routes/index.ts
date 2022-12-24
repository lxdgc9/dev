import express from "express";
import { authRouter } from "./auth";
import { companyRouter } from "./company";
import { grantPermissionRouter } from "./grant-permission";
import { permissionRouter } from "./permission";
import { positionRouter } from "./position";
import { roleRouter } from "./role";
import { userRouter } from "./user";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/permissions", permissionRouter);
router.use("/roles", roleRouter);
router.use("/grant-permission", grantPermissionRouter);
router.use("/users", userRouter);
router.use("/companies", companyRouter);
router.use("/positions", positionRouter);

export { router };
