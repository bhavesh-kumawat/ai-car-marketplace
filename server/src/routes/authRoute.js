import { requireAuth } from "@clerk/express";

app.get("/", requireAuth(), handler);
