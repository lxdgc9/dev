import { Request, Response } from "express";
import { PositionModel } from "../../models/position-model";
import { logger } from "../../utils/logger";

async function getPositonList(_req: Request, res: Response) {
  try {
    const positionList = await PositionModel.find({});
    const positionListPopulated = await PositionModel.populate(
      positionList,
      "company"
    );
    res.status(200).json({
      status: true,
      message: "Get Position Success",
      positionList: positionListPopulated,
    });
  } catch (err) {
    logger.error("Get position error");
    console.log(err);
    res.status(404).json({
      status: false,
      message: "Get Position Failed",
    });
  }
}

export { getPositonList };
