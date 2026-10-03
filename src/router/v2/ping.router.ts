import express, { Router } from "express";
import { pingHandlerV2 } from "../../controllers/ping.controller.js";

const pingRouter2: Router = express.Router();

pingRouter2.get("/", pingHandlerV2);

export default pingRouter2;
