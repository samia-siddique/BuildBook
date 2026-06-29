import express from "express"
import Session from "../models/Session.js";

 const router = express.Router();

 //Get all Session
 router.get("/", async (req,res) =>{
    try{
        const session = await Session.find();
        res.json(session)
    } catch(error){
        res.status(500).json({message: error.message});
    }
 })

 //Create Session
 router.post("/", async (req, res) =>{
    try{
        const {title, hours, date, note } = req.body;
        if(!title || !hours || !date || !note) return res.status(400).json({message: "Text is required"})
            const session = await Session.create({ title, hours, date, note });
        res.status(201).json(session);
    } catch(error){
        res.status(500).json({message: error.message});
    }
 })
 
 //Delete Session
 router.delete("/:id", async (req, res)=>{
     try{
         const session = await Session.findByIdAndDelete(req.params.id)
         if(!session) return res.status(404).json({message: "Project not found"})
             res.json({message: "Project Removed"})
     } catch(error){
         res.status(500).json({message: error.message})
 
     }
 });
 
 export default router;
 
 
 