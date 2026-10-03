import { Request, Response } from "express";
import {  InternalServerError } from "../utils/errors/app.error.js";
import logger from "../config/logger.config.js";

// Builder design pattern for pingHandlerV1 and pingHandlerV2
export async function pingHandlerV1(
  req: Request,
  res: Response,
): Promise<void> {
  try {

    logger.info("Ping handler V1 called");
    
   res.status(200).json({
      success: true,
      message: "Pong! 1",
    });
  } catch (error) {
  

    throw new InternalServerError("Internal server error in pingHandlerV1");
  }
}

export async function pingHandlerV2(
  req: Request,
  res: Response,
): Promise<void> {
  res.status(200).json({
    success: true,
    message: "Pong! 2",
  });
}
