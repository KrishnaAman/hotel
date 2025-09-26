import { use } from "react";
import User from "../models/User.js";

//middleware to check if the user is authenticated

export const protect = async(req,res,next)=>{
    const{userId} = req.auth();
    if(!userId){
        res.json({success:false,message:"not authenticated"})
    }else{
        const user = await User.findById(userId);
        req.user=user;
          req.user_id = userId; 
        next()
    }
}