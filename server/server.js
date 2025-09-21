import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebHooks from "./controllers/clerkWebhooks.js";

connectDB()

const app  = express();

//middleware

app.use(express.json)
app.use(clerkMiddleware())

//api to listen clerk webhooks

app.use("/api/clerk",clerkWebHooks)

app.use(cors())

app.get('/',(req,res)=>res.send("API is working"))

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
