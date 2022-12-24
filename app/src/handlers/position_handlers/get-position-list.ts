import express from "express";
import { PositionModel } from "../../models/position-model";
import { logger } from "../../utils/logger";

async function getPositonList(
  _req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const positionList = await PositionModel.find({});
    res.status(200).json({
      status: true,
      message: "Get position success",
      positionList,
    });
  } catch (err) {
    logger.error("get position error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get position failed",
    });
  }
}

export { getPositonList };
