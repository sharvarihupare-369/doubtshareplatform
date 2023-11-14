const express = require("express");
const UserModel = require("../models/userModel");
const userRouter = express.Router();
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  validationMiddleware,
} = require("../middlewares/registerValidationmiddleware");
const BlackListModel = require("../models/blackListModel");
const { authMiddleware } = require("../middlewares/authMiddleware");
const TutorAvailabilityModel = require("../models/tutorAvailabilityModel");

userRouter.post("/register", validationMiddleware, async (req, res) => {
  try {
    const { password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    let user = await UserModel.create({ ...req.body, password: hashPassword });
    res.status(200).send({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found!");
    }
    const hashedPassword = await bcrypt.compare(password, user.password);

    if (!hashedPassword) {
      res.status(400).send("Invalid Credentials");
    } else {
      const token = jwt.sign(
        { userId: user._id, name: user.username },
        process.env.secretKey,
        { expiresIn: "1d" }
      );
      res
        .status(200)
        .send({
          message: "User LoggedIn Successfully",
          token,
          name: user.username,
          type:user.role
        });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

userRouter.get("/logout", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(400).send({ message: "Access token not found!" });
  }
  try {
    const blackListToken = await BlackListModel.create({ token });
    res.status(200).send({ message: "User Logged Out" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

userRouter.get("/users",async(req,res)=>{
    try {
        const user = await UserModel.find();
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
})

module.exports = { userRouter };
