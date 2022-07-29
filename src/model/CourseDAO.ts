import mongoose from "mongoose";
import { Course } from "./Course";

const CourseSchema = new mongoose.Schema({
  courseNumber: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  professor: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  }
});

export default mongoose.model<Course & mongoose.Document>("Course", CourseSchema);