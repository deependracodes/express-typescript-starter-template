// Override defualt error handler of express for custom error handling
import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errors/app.error.js";

export const errorMiddleware = (err:AppError, req:Request,res:Response,next:NextFunction) => {

     console.log(err);
     
    res.status(err.statusCode).json({
        success: false,
        message : err.message
    })


}