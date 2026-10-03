import type { Request, Response, NextFunction } from "express";
import { v4 as uuid } from "uuid";
import { asyncLocalStorage } from "../utils/helpers/request.helper.js";

// This middleware generates a unique correlation ID for each incoming request and attaches it to the request object. This allows for better tracking and logging of requests throughout the application.
// limitations is for async tasks , file id , background job, producer-consumer , so we can have async local storage to store correlation id for each request and then we can use it in async tasks as well
export const correlationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const correlationId = uuid();

  req.headers["X-Correlation-ID"] = correlationId;

  // async
  asyncLocalStorage.run({ corelationId: correlationId }, () => {
    next();
  });
};
