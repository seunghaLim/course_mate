import { BoardController } from "../controllers/BoardController";
import { Router } from "express";

const router = Router();

router.get("/questions", new BoardController().findAllQuestions);
router.get("/:courseId", new BoardController().findBoardsByCourseId);
router.get("/:courseId/:boardId", new BoardController().findBoardByBoardId);
router.post("/:courseId", new BoardController().createBoard);
router.post("/:courseId/:boardId/comment", new BoardController().createComment);

export default router;