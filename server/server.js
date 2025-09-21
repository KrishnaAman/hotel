import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHooks from "./controllers/clerkWebhooks.js";

// connect to MongoDB
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// routes
app.use("/api/clerk", clerkWebHooks);

app.get("/", (req, res) => res.send("API is working ✅"));



// For Vercel (serverless) → export app
export default app;

// For Render/Heroku/Local → run a normal server
if (process.env.NODE_ENV !== "vercel") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}
