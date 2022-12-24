import express from "express";
import { PositionModel } from "../../models/position-model";
import { logger } from "../../utils/logger";

async function getPositionById(
  req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const position = await PositionModel.findById(req.params.id);
    res.status(200).json({
      status: true,
      message: "Get position by id success",
      position,
    });
  } catch (err) {
    logger.error("get position by id error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Get position by id failed",
    });
  }
}

export { getPositionById };
