const UserModel = require("../models/userModel");

const validationMiddleware = async(req,res,next) => {

  const {email,password} = req.body;

  if(password.length < 8){
    return res.status(400).send({message:"Password must be of minimum eight charaters"});
  }

  if(!/\d/.test(password)){
    return res.status(400).send({message:"Password must contain number"});
  }

  if(!/[A-Z]/.test(password)){
    return res.status(400).send({message:"Password must contain an uppercase character"});
  }

  if(!/[!@#$%^&*]/.test(password)){
    return res.status(400).send({message:"Password must contain a special character"});
  }

  let existUser = await UserModel.findOne({email});

  if(existUser){
    res.status(400).send({message:"User is Already Exists!"});
  }else{
    next()
  }

}

module.exports = {validationMiddleware};

