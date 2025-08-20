import express from "express";
import cors from "cors";
import { clerkWebhooks } from "./controllers/webhooks.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

/*
 * clerk *
 */
app.post("/clerk", express.json(), clerkWebhooks);

export { app };
