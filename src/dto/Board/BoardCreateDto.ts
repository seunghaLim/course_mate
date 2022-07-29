import mongoose from "mongoose";

export interface BoardCreateDto {
  title: string;
  content: string;
  isQuestion: boolean;
}