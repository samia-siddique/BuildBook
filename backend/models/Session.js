import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
  },
  note:{
    type: String,
  }
});

const Session = mongoose.model("Session", sessionSchema);
export default Session;
