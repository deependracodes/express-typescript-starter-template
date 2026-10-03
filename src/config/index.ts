// This file contains all the basic configuration for the project. You can add more configurations as needed.

import dotenv from "dotenv";
dotenv.config();

type ServerConfig = {
  PORT: number;
};

export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 3000,
};
