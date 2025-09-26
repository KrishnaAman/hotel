import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// connect to MongoDB
connectDB();
connectCloudinary();

const app = express();
app.use(cors());

// middleware
app.use(express.json());

app.use(clerkMiddleware());


// routes
app.use("/api/clerk", clerkWebHooks);

app.get("/", (req, res) => res.send("API is working ✅"));

app.use('/api/user',userRouter)
app.use('/api/hotels',hotelRouter)
app.use('/api/rooms',roomRouter)
app.use('/api/bookings',bookingRouter)



// For Vercel (serverless) → export app
export default app;

// For Render/Heroku/Local → run a normal server
if (process.env.NODE_ENV !== "vercel") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}
