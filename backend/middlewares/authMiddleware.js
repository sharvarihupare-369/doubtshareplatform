const BlackListModel = require("../models/blackListModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = async(req,res,next) => {
     const token = req.headers.authorization?.split(" ")[1];
     if(!token){
        return res.status(400).send({message : "Access token not found!"});
     }

     const blackListToken = await BlackListModel.findOne({token});
     if(blackListToken){
        return res.status(400).send({message : "Token Revoked!"});
     }

     jwt.verify(token,process.env.secretKey,async(err,decoded)=>{
        if(err) res.status(400).send({message : "Invalid token!"});
        else {
           req.userId = decoded.userId;
           req.name = decoded.name;
           next();
        }
     })

}

module.exports = {authMiddleware};