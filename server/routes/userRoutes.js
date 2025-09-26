import express from "express"
import { protect } from "../middleware/authMiddleware.js";
import { checkHotelOwnership, getUserData, storeRecentSearchedCities } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/',protect,getUserData);
userRouter.post('/store-recent-search',protect,storeRecentSearchedCities);
userRouter.get('/check-ownership',checkHotelOwnership);


export default userRouter