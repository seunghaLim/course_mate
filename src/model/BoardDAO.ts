import mongoose from "mongoose";
import { Board } from "./Board";

const BoardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  content: {
    type: String,
    required: true 
  },
  isQuestion: {
    type: Boolean,
    default: false 
  },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Course"
  },
  createdAt: {
    type: String,
    required: true 
  }
});

export default mongoose.model<Board & mongoose.Document>("Board", BoardSchema);