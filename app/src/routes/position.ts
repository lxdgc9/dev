import express from "express";
import * as positionHandler from "../handlers/position_handlers";

const positionRouter = express.Router();

positionRouter.get("/", positionHandler.getPositonList);
positionRouter.get("/:id", positionHandler.getPositionById);
positionRouter.post("/", positionHandler.createPosition);

export { positionRouter };
