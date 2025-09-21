export const getUserData = async ()=>{
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

