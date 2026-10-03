import express, { Express } from "express";
import { serverConfig } from "./config/index.js";
import v1Router from "./router/v1/index.router.js";
import v2Router from "./router/v2/index.router.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import logger from "./config/logger.config.js";
import { correlationMiddleware } from "./middlewares/corelation.middleware.js";

const app: Express = express();
const port = serverConfig.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(correlationMiddleware);

app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);

  logger.info(`Server running on http://localhost:${port}`);
});
