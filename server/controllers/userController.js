import Hotel from "../models/Hotel.js";

export const getUserData = async (req,res)=>{
    try{
        const role = req.user.role;
        const recentSearchCities = req.user.recentSearchCities;
        res.json({success:true,role,recentSearchCities})

    }catch(error){
        res.json({success:false,message:error.message})

    }
}

//store user recent searched cities

export const storeRecentSearchedCities = async (req,res)=>{
    try{
       const {recentSearcedCity} = req.body;
       const user = await req.user;
       if(user.recentSearcedCities.length<3){
        user.recentSearcedCities.push(recentSearcedCity)

       }else{
        user.recentSearcedCities.shift();
        user.recentSearcedCities.push(recentSearcedCity)
       }
       await user.save();
       res.json({success:true,message:"City Added"})

    }catch(error){
      res.json({success:false,message:error.message})
    }
}



export const checkHotelOwnership = async (req, res) => {
    // req.user.id is set by your 'protect' middleware after successful authentication
    const userId = req.user._id; 

    const hotel = await Hotel.findOne({ owner: userId });

    if (hotel) {
        res.status(200).json({ success: true, isOwner: true });
    } else {
        res.status(200).json({ success: true, isOwner: false });
    }
};