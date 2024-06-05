import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signin = async(req,res,next) =>{
   const {username ,email ,password} = req.body;
   const hashPassword = bcrypt.hashSync(password,10);
   const newUser = new User({username , email ,hashPassword});
   try{
    await newUser.save();
    res.status(201).json("new user created"); 
   }
   catch(error){
      next(error);
   }


};

