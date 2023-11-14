const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   username : {type:String,required:true},
   email : {type:String,required:true},
   password : {type:String,required:true},
   role : {type:String,enum:['Student','Tutor'],default:'Student'},
})

const UserModel = mongoose.model('user',userSchema);

module.exports = UserModel;