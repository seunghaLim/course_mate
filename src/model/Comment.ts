import mongoose from "mongoose";

export interface Comment {
  content: string;
  writer: mongoose.Schema.Types.ObjectId;
  board: mongoose.Schema.Types.ObjectId;
  createdAt: string;
} 