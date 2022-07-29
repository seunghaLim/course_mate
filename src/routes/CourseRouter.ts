import { CourseController } from "../controllers/CourseController";
import { Router } from "express";

const router = Router();

router.get("/", new CourseController().findAllCourses);

export default router;