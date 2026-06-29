import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import connectdb from "./config/db.js";
import goalRoutes from "./routes/goalRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";

dotenv.config();
connectdb();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/goals", goalRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/", (req, res) => res.send("Backend is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
