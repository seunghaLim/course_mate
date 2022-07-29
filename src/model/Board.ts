import mongoose from "mongoose";

export interface Board {
  title: string;
  content: string;
  isQuestion: boolean;
  writer: mongoose.Schema.Types.ObjectId;
  course: mongoose.Schema.Types.ObjectId;
  createdAt: string;
}