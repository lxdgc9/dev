import { Router } from "express";
import {
  getPositonList,
  getPositionById,
  createPosition,
  updatePositionById,
  deletePositionById,
} from "../handlers/position_handlers";

const router = Router();

router.get("/", getPositonList);
router.get("/:id", getPositionById);
router.post("/", createPosition);
router.put("/:id", updatePositionById);
router.delete("/:id", deletePositionById);

export { router as positionRouter };
