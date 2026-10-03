import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { getCorrelationId } from "../utils/helpers/request.helper.js";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.colorize(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
    winston.format.printf((info) => {
      // const output = {
      //   timestamp: info.timestamp,
      //   level: info.level,
      //   message: info.message,
      //   data : info.data || "",
      // };
      // return JSON.stringify(output);
      return `${info.timestamp} [${info.level}]: ${info.message} ${getCorrelationId()}`;
    }),
  ),
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({ 
      filename: "logs/%DATE%-app.logs" ,
      datePattern : "YYYY-MM-DD",
      maxFiles : "10d",
      maxSize : "20m",
    }),
  ],
});

export default logger;
