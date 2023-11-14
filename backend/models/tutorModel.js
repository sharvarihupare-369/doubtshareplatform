const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema({
    userId : {type:mongoose.Schema.Types.ObjectId, ref : 'user'},
    name : {type:String},
    classGrade : {type:String,required:true},
    language : {type: String,required:true},
    subjectExpertise : {type:String,required:true}
});

const TutorModel = mongoose.model('tutor',tutorSchema);

module.exports = TutorModel;