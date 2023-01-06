import { Router } from "express";
import {
  getPositonList,
  getPositionById,
  createPosition,
} from "../handlers/position_handlers";

const router = Router();

router.get("/", getPositonList);
router.get("/:id", getPositionById);
router.post("/", createPosition);

export { router as positionRouter };
