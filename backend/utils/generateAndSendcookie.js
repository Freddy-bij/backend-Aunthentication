import jwt from "jsonwebtoken"

export const generateTokenAndSendcookie = (res, userId) =>{
    const token = jwt.sign({userId} , process.env.JWT_SECRET ,{
        expiresIn: "7d"
    } )

    res.cookie("token" , token , {
        httponly:true,
        secure:process.env.NODE_ENV === "production",
        samesite:"strick",
        maxAge: 7 * 24 * 60 * 1000
    })

    return token;
}