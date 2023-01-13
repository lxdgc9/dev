import { Request, Response } from "express";
import { UpdatePositionDto } from "../../dtos/position/update-position-dto";
import { PositionModel } from "../../models/position-model";
import { logger } from "../../utils/logger";

async function updatePositionById(req: Request, res: Response) {
  const { name, companyId }: UpdatePositionDto = req.body;

  try {
    await PositionModel.findByIdAndUpdate(req.params.id, {
      name,
      company: companyId,
    });

    // Ok, send response
    res.status(200).json({
      status: true,
      message: "Update Position Success",
    });
  } catch (err) {
    logger.error("Update position by id error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Update Position Failed",
    });
  }
}

export { updatePositionById };
