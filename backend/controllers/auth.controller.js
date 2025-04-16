import { User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSendcookie } from "../utils/generateAndSendcookie.js";


export const signup = async ( req , res) =>{
 const {email , password , name} = req.body

   try{

    if(!email || !password || !name){
        throw new Error("All filds is required");
    }

    const userAldredyExist = await User.findOne({email})

    if(userAldredyExist){
        return res.status(400).json({ success: false , message:"User aldredy exists"})
    }

    const hashedPassword = await bcrypt.hash(password , 10)
    const verificationtoken =  Math.floor(100000 + Math.random() + 900000).toString();;
    const user = new User ({
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
    const {email , password} = req.body;

    try{
      const user = await User.findOne({email})
      if(!user) {
        return res.status(400).json({success: false , message: "invalid user"});
      }

      const isPasswordValid = await bcrypt.compare(password , user.password);
      if(!isPasswordValid){
        return res.status(400).json({success: false, message: "invalide password"})
      }

      generateTokenAndSendcookie(res, user._id)

      user.lastLogin = new Date();
      await user.save();

      res.status(200).json({
        success:true,
        message: "logged in successfully",
        user:{
            ...user._doc,
            password:undefined
        },
      })
    }catch(error){
        console.log("error in login" , error)
      res.status(400).json({success:false , message:error.message});
    }
 }

 export const logout = async ( req , res) =>{
    res.clearCookie("token");
    res.status(200).json({success: true , message: "logged out successfully"})
 }
 


 export const checkAuth = async (req , res)=>{

  try{
   const user = await User.findById(req.userId).select("-password")
   if(!user){
    return res.status(400).json({ success: false, message: "User is not found"})
   }

   res.status(200).json({ success: true , User })


  }catch(error){
    console.log("Error in checkAuth" , error);
    res.status(400).json({success: false, message: error.message});
  }

 }
