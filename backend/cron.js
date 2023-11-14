const cron = require("node-cron");
const TutorAvailabilityModel = require("./models/tutorAvailabilityModel");

cron.schedule('*/3 * * * * *', async() => {
    try {
        const onlineTutorsCount = await TutorAvailabilityModel.countDocuments();
    console.log(`Number of online tutors : ${onlineTutorsCount}`)
    } catch (error) {
        console.log('Cron Job Error',error.message)
    }
    console.log("cron" + new Date())
});