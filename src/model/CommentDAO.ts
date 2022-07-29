import mongoose from "mongoose";
import { Comment } from "./Comment";

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  board: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }, 
  createdAt: {
    type: String,
    required: true
  }
});

export default mongoose.model<Comment & mongoose.Document>("Comment", CommentSchema);