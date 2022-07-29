import { BoardController } from "../controllers/BoardController";
import { Router } from "express";

const router = Router();

router.get("/questions", new BoardController().findAllQuestions);

export default router;