import express from "express";
import Goal from "../models/Goal.js";

const router = express.Router();

//Get all Goals
router.get("/", async (req, res) => {
  try {
    const goals = await Goal.find();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Create Goal
router.post("/", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) return res.status(400).json({ message: "Text is required" });
    const goal = await Goal.create({ text });
    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//Delete Goal
router.delete("/:id", async (req, res) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);

    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    res.json({ message: "Goal removed" });
  } catch (error) {
    console.log(error); // <-- Make sure this is here
    res.status(500).json({ message: error.message });
  }
});

export default router