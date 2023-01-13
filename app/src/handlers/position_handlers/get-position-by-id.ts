import { Request, Response } from "express";
import { PositionModel } from "../../models/position-model";
import { logger } from "../../utils/logger";

async function getPositionById(req: Request, res: Response) {
  try {
    const position = await PositionModel.findById(req.params.id);
    const positionPopulated = await PositionModel.populate(position, "company");
    res.status(200).json({
      status: true,
      message: "Get Position Success",
      position: positionPopulated,
    });
  } catch (err) {
    logger.error("Get position by id error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Get Position Failed",
    });
  }
}

export { getPositionById };
