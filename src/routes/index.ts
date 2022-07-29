import { Router } from "express";
import BoardRouter from "./BoardRouter";
import CourseRouter from "./CourseRouter";

const router = Router();

router.use("/", BoardRouter);
router.use("/courses", CourseRouter);

export default router;