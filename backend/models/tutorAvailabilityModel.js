const mongoose = require("mongoose");

const tutorAvailabilitySchema = new mongoose.Schema({
    tutorId : {type : mongoose.Schema.Types.ObjectId, ref : 'user' },
    lastPing : {type:Date, default : Date.now},
})

const TutorAvailabilityModel = mongoose.model('tutoravailable', tutorAvailabilitySchema);

module.exports = TutorAvailabilityModel;