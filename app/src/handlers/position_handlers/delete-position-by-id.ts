import { Request, Response } from "express";
import { PositionModel } from "../../models/position-model";
import { logger } from "../../utils/logger";

async function deletePositionById(req: Request, res: Response) {
  try {
    await PositionModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: true,
      message: "Delete Position Success",
    });
  } catch (err) {
    logger.error("Delete position by id error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Delete Position Failed",
    });
  }
}

export { deletePositionById };
