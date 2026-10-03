import express, { Router } from "express";
import pingRouter2 from "./ping.router.js";

const v2Router: Router = express.Router();

v2Router.use("/ping", pingRouter2);

export default v2Router;
