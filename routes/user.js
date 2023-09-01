import express from "express";

import User from "../models/User.js";
import mongoose from "mongoose";

const router = express.Router();

// Create a user
router.post("/create", async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Get all user

router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.status(201).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Updating a user by id
router.put("/:id", async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No user with that id");
    }

    const updatedUser = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    await updatedUser.save();

    res.status(201).send(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Deleting a user by id
router.delete("/:id", async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No user with that id");
    }

    await User.findByIdAndDelete(_id);

    res.status(201).json({ message: "User deleted" });
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
