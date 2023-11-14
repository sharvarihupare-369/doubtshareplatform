const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    userId : {type:mongoose.Schema.Types.ObjectId, ref : 'user'},
    name : {type:String},
    classGrade : {type:String,required:true},
    language : {type: String,required:true},
})

const StudentModel = mongoose.model('student',studentSchema);

module.exports = StudentModel;