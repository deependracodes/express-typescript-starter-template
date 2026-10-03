import express, {Router} from "express";
import pingRouter1 from "./ping.router.js";

const v1Router: Router = express.Router();

v1Router.use("/ping", pingRouter1);

export default v1Router;
