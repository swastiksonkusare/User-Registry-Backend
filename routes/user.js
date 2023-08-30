import express from "express";

import User from "../models/User.js";

const router = express.Router();

// Post
router.post("/create", async (req, res) => {
  try {
    const userData = req.body; // Assuming your request body contains user data
    const newUser = new User(userData);
    await newUser.save(); // Save the new user to the database
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
