import { Request, Response } from "express";
import { CreatePositionDto } from "../../dtos/position/create-position-dto";
import { PositionModel } from "../../models/position-model";
import { logger } from "../../utils/logger";

async function createPosition(req: Request, res: Response) {
  const { name, companyId }: CreatePositionDto = req.body;

  try {
    // Create new company
    const newPosition = new PositionModel({ name, companyId });
    await newPosition.save();

    // Ok, send response
    res.status(201).json({
      status: true,
      message: "Create position success",
      position: newPosition,
    });
  } catch (err) {
    logger.error("create position error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Create position failed",
    });
  }
}

export { createPosition };
