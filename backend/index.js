const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const connection = require("./db");
require("dotenv").config();
const cors = require("cors");
const cron = require("node-cron");
const { userRouter } = require("./routes/userRouter");
const { doubtRouter } = require("./routes/doubtRouter");
const { tutorRouter } = require("./routes/tutorRouter");
const TutorAvailabilityModel = require("./models/tutorAvailabilityModel");
const port = process.env.PORT || 5000;
const path = require("path");
const TutorModel = require("./models/tutorModel");
const { studentRouter } = require("./routes/studentRouter");

const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

app.use('/api/auth',userRouter);
app.use('/api/doubts',doubtRouter);
app.use('/api/tutor',tutorRouter);
app.use('/api/student',studentRouter);



app.get("/",(req,res)=>{
    // res.send("Welcome to Home Page");
    const options = {
        root : path.join(__dirname)
     }
     const filename = 'index.html'
     res.sendFile(filename,options)
})

app.post('/trigger-cron',async(req,res)=>{
    try {
        const onlineTutorsCount = await TutorAvailabilityModel.countDocuments();
        console.log(`Number of online tutors : ${onlineTutorsCount}`)

        io.emit('cronJob',{onlineTutorsCount});
        res.status(200).send({message : 'Cron job triggered successfully'})
    } catch (error) {
        console.log('cron error',error.message)
        res.status(400).send({message:error.message});
    }
})




cron.schedule('* * * * * *', async() => {
    try {
        const onlineTutorsCount = await TutorAvailabilityModel.countDocuments();
        console.log(`Number of online tutors : ${onlineTutorsCount}`);
        io.emit('cronJob', onlineTutorsCount);
    } catch (error) {
        console.log('Cron Job Error',error.message)
    }
    console.log("cron run at : " + new Date())
});




app.listen(port,async()=>{
    try {
        await connection;
        console.log("Connected to DB...");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is listening on port ${port}`);
    
})

io.on('connection',(socket)=>{
    console.log("A user connected");

    socket.on('disconnect',()=>{
        console.log("User disconnected")
    })
})