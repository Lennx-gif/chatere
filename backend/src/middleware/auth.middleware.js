import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) {
            return res.staus(401).json({message: "Unauthorised Access-No Token"});
        } 

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) {
            return res.status(401).json({message: "Unauthorised Access-Incorrect Token"});
        }
    } catch (error) {
        
    }
};