import { NextFunction, Request, Response } from "express";
import { ZodError, ZodType } from "zod";

// a middleware function to validate request body against a Zod schema
export const validateRequestBody = (schema: ZodType) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // console.log("Validation failed:", error);
        const formattedErrors = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        res.status(400).json({
          success: false,
          message : "Invalid request body",
          errors: formattedErrors,
        });
        return;
      }

      next(error);
    }
  };
};

export const validateQueryParams = (schema: ZodType) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await schema.parseAsync(req.query);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // console.log("Validation failed:", error);
        const formattedErrors = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        res.status(400).json({
          success: false,
          message : "Invalid request body",
          errors: formattedErrors,
        });
        return;
      }

      next(error);
    }
  };
};

// more generic

type RequestLocation = "body" | "query" | "params";

export const validate = (schema: ZodType, target: RequestLocation = "body") => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      // Parses and strips unknown keys dynamically per incoming HTTP request
      req[target] = await schema.parseAsync(req[target]);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        res.status(400).json({
          success: false,
          message: `Invalid request ${target}`,
          errors: formattedErrors,
        });
        return;
      }

      next(error);
    }
  };
};