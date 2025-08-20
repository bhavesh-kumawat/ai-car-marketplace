import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {clerkMiddleware} from "@clerk/express"

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

/*
 ** Clerk **
*/
app.use(clerkMiddleware());

app.get("/auth-state", (req, res) => {
  const authState = req.auth;
  return res.json(authState);
});

export { app };
