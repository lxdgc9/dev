import { Request, Response } from "express";
import { UpdatePositionDto } from "../../dtos/position/update-position-dto";
import { PositionModel } from "../../models/position-model";
import { logger } from "../../utils/logger";

type UpdatePayload = {
  name?: string;
  company?: string;
};

async function updatePositionById(req: Request, res: Response) {
  const { name, companyId }: UpdatePositionDto = req.body;
  try {
    const updatePayload: UpdatePayload = {
      name,
      company: companyId,
    };
    await PositionModel.findByIdAndUpdate(req.params.id, updatePayload);
    // Ok, send response
    res.status(200).json({
      status: true,
      message: "Update Position success",
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
