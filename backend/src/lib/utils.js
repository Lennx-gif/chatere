import jwt from 'jsonwebtoken';

export const generateToken = (userId,res) => {
    const token = jwt.sign({id:userId},process.env.JWT_SECRET,{
        expiresIn: "30d"
    });
    
    res.cookie("jwt",token,{
        httpOnly:true,// prevents XXS attacks -cross site scripting attacks
        maxAge:30*24*60*60*1000,// 30 days in milliseconds
        sameSite:"strict", // prevents CSRF attacks -cross site request forgery attacks
        secure: process.env.NODE_ENV  !=="development",
    });

    return token;

}