import mongoose from "mongoose";
import { User } from "./User";

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model<User & mongoose.Document>("User", UserSchema);