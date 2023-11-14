const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const DoubtModel = require("../models/doubtModel");
const doubtRouter = express.Router();

doubtRouter.get("/history", authMiddleware, async (req, res) => {
  try {
    const doubts = await DoubtModel.find({ studentId: req.userId }).sort({
      createdAt: -1,
    });
    res.status(200).send(doubts);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

doubtRouter.post("/addDoubt", authMiddleware, async (req, res) => {
  try {
    // const {subject,question} = req.body;
    const newDoubt = await DoubtModel.create({
      studentId: req.userId,
      ...req.body,
    });
    res.status(200).send(newDoubt);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

doubtRouter.patch("/updateDoubt", authMiddleware, async (req, res) => {
  try {
    const updatedDoubt = await StudentModel.findOneAndUpdate(
      {
        userId: req.userId,
      },
      req.body,
      { new: true }
    );

    res.status(200).send(updatedDoubt);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = { doubtRouter };
