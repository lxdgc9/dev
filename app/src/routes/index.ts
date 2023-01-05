import express from "express";
import { authRouter } from "./auth";
import { companyRouter } from "./company";
import { grantPermissionRouter } from "./grant-permission";
import { permissionRouter } from "./permission";
import { positionRouter } from "./position";
import { roleRouter } from "./role";
import { userRouter } from "./user";

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/permissions", permissionRouter);
apiRouter.use("/roles", roleRouter);
apiRouter.use("/grant-permission", grantPermissionRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/companies", companyRouter);
apiRouter.use("/positions", positionRouter);

export { apiRouter };
