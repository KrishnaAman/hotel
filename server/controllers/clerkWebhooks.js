import User from "../models/User.js";
import { Webhook } from "svix";
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URI);
    console.log("DB connected");
  }
}

const clerkWebHooks = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ success: false, message: "Method not allowed" });

  try {
    await connectDB();

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    await whook.verify(JSON.stringify(req.body), headers);

    const { data, type } = req.body;

    const userData = {
      clerkId: data.id,
      email: data.email_addresses?.[0]?.email_address,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
    };

    switch (type) {
      case "user.created":
        await User.findOneAndUpdate({ clerkId: data.id }, userData, { upsert: true });
        break;

      case "user.updated":
        await User.findOneAndUpdate({ clerkId: data.id }, userData);
        break;

      case "user.deleted":
        const deletedUser = await User.findOneAndDelete({ clerkId: data.id });
        console.log("Deleted user:", deletedUser);
        break;

      default:
        break;
    }

    res.status(200).json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export default clerkWebHooks;
