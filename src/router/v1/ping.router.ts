import express, { Router } from "express";
import { pingHandlerV1 } from "../../controllers/ping.controller.js";
import { validate } from "../../validators/index.js";
import { pingSchema } from "../../validators/ping.validator.js";

const pingRouter1: Router = express.Router();

// pingRouter1.get("/", validate(pingSchema) , pingHandlerV1);
pingRouter1.get("/", pingHandlerV1);

export default pingRouter1;