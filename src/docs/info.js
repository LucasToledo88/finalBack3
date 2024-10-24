import config from "../config/config.js";
const PORT = config.PORT;
const VERSION = config.VERSION;

export const info = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Backend III",
      autor: "Toledo Lucas",
      version: VERSION,
      description: "API - Backend III - 69910 -",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/docs/*.yml"],
};
