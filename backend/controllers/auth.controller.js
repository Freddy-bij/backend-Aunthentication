import { USer } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {  generaterVerificationToken } from "../utils/generaterVerificationToken.js";
import { generateTokenAndSendcookie } from "../utils/generateAndSendcookie.js";

export const signup = async ( req , res) =>{
 const {email , password , name} = req.body

   try{

    if(!email || !password || !name){
        throw new Error("All filds is required");
    }

    const userAldredyExist = await USer.findOne({email})

    if(userAldredyExist){
        return res.status(400).json({ success: false , message:"User aldredy exists"})
    }

    const hashedPassword = await bcrypt.hash(password , 10)
    const verificationtoken = generaterVerificationToken();
    const user = new USer ({
        email,
        password:hashedPassword,
        name,
        verificationtoken,
        verificationtokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
    })
   
    await user.save();

    generateTokenAndSendcookie(res , user._id)

    res.status(201).json({
        success: true,
        message:"user created successfully", 
        user:{
            ...user._doc,
            password: undefined
        }
    })

   }catch(error){
      res.status(400).json({success: false , message: error.message})
   }
}

export const login = async ( req , res) =>{
    res.send("login router")
 }

 export const logout = async ( req , res) =>{
    res.send("logout router")
 }
 
