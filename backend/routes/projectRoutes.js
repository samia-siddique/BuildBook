import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

//Get all Projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Create Project
router.post("/", async (req, res) => {
  try {
    const { title, completed, hours } = req.body;
    if (!title || !completed || !hours)
      return res.status(400).json({ message: "Text is required" });
    const project = await Project.create({ title, completed, hours });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete Project
router.delete("/:id", async (req, res)=>{
    try{
        const project = await Project.findByIdAndDelete(req.params.id)
        if(!project) return res.status(404).json({message: "Project not found"})
            res.json({message: "Project Removed"})
    } catch(error){
        res.status(500).json({message: error.message})

    }
});


export default router;

