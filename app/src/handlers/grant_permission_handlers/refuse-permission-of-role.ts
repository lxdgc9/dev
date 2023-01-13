import { Request, Response } from "express";
import { logger } from "../../utils/logger";

function refusePermissionOfRole(req: Request, res: Response) {
  try {
    res.status(200).json({
      status: true,
      message: "Refuse Permission Success",
    });
  } catch (err) {
    logger.error("Refuse permisssion of role error");
    console.log(err);
    res.status(400).json({
      status: false,
      message: "Refuse Permission Failed",
    });
  }
}

export { refusePermissionOfRole };
