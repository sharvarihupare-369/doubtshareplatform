const TutorAvailabilityModel = require("../models/tutorAvailabilityModel");

const maximum_pingtime_interval = 3000;

const tutorPingMiddleware = async(req,res,next) => {
    const tutorId = req.userId;
    const currentTime = new Date();

    await TutorAvailabilityModel.updateOne({tutorId},{lastPing: currentTime},{upsert : true});

    const tutor = await TutorAvailabilityModel.findOne({tutorId});
    if(tutor && tutor.lastPing.getTime() > currentTime.getTime() - maximum_pingtime_interval){
        next();
    }else{
        res.status(400).send({message : "Tutor is disconnected"})
    }
}

module.exports = {tutorPingMiddleware};