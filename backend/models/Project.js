import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: String,
  hours: {
    type: Number,
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
