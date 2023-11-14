const express = require("express");
const tutorRouter = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const TutorModel = require("../models/tutorModel");
const TutorAvailabilityModel = require("../models/tutorAvailabilityModel");
const { tutorPingMiddleware } = require("../middlewares/tutorMiddleware");

tutorRouter.get("/", async (req, res) => {
  try {
    const alltutors = await TutorModel.find();
    res.status(200).send(alltutors);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

tutorRouter.get("/gettutor",authMiddleware, async (req, res) => {
    try {
      const tutor = await TutorModel.findOne({userId : req.userId});
      res.status(200).send(tutor);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });


tutorRouter.post("/addData", authMiddleware, async (req, res) => {
  try {
    const tutorProfile = await TutorModel.create({
      userId: req.userId,
      ...req.body,
    });
    res.status(200).send(tutorProfile);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

tutorRouter.patch("/updateData", authMiddleware, async (req, res) => {
  try {
    const updatedtutorProfile = await TutorModel.findOneAndUpdate(
      {
        userId: req.userId,
      },
      req.body,
      { new: true }
    );
    res.status(200).send(updatedtutorProfile);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

tutorRouter.post("/update-ping", authMiddleware, async (req, res) => {
  try {
    const available = await TutorAvailabilityModel.findOneAndUpdate(
      { tutorId: req.userId },
      { lastPing: Date.now() },
      { upsert: true }
    );
    res.status(200).send({ message: "Ping added successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

tutorRouter.post("/ping", authMiddleware, tutorPingMiddleware, (req, res) => {
  res.status(200).send({ message: "Ping received and time updated" });
});

module.exports = { tutorRouter };
