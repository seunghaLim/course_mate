import { BoardService } from "../services";
import { Request, Response } from "express";
import fakeUserId from "../module/FakeUserId";
import { BoardCreateDto } from "../dto/Board/BoardCreateDto";
import { CommentCreateDto } from "../dto/Comment/CommentCreateDto";
import { errorMessage } from "../module/errorMessage";

export class BoardController {

  /**
   *  @route GET /questions
   *  @desc find all questions
   *  @access public
   */
  public async findAllQuestions (req: Request, res: Response) {
  
    try {
      const foundQuestions = await new BoardService().findAllQuestions();
      return res.status(200).send(foundQuestions);
    } catch (error){
      return res.status(500).json({ "message": errorMessage.INTERNAL_SERVER_ERROR })
    }
  }

  /**
   * @route GET /courseId(과목 Id)
   * @desc find boards by courseId
   * @access public
   */

  public async findBoardsByCourseId(req: Request, res: Response) {

    const { courseId } = req.params;

    try {
      const foundBoards = await new BoardService().findBoardsByCourseId(courseId);
      return res.status(200).send(foundBoards);
    } catch(error){
      return res.status(500).json({ "message": errorMessage.INTERNAL_SERVER_ERROR })
    }

  }

  public async findBoardByBoardId(req: Request, res: Response) {

    const { boardId } = req.params;

    try {
      const foundData = await new BoardService().findBoardByBoardId(boardId);
      return res.status(200).send(foundData);
    } catch(error){
      return res.status(500).json({ "message": errorMessage.INTERNAL_SERVER_ERROR })
    }

  }

  public async createBoard(req: Request, res: Response) {

    const { courseId } = req.params;
    const boardCreateDto: BoardCreateDto = req.body;
    const userId = fakeUserId as string;
    try {
      await new BoardService().createBoard(userId, courseId, boardCreateDto);
      return res.status(200).send();
    } catch(error){
      return res.status(500).json({ "message": errorMessage.INTERNAL_SERVER_ERROR })
    }

  }

  public async createComment(req: Request, res: Response) {

    const commentCreateDto: CommentCreateDto = req.body;
    const userId = fakeUserId as string;
    const { boardId } = req.params;
    try {
      const data = await new BoardService().createComment(userId, boardId, commentCreateDto);
      return res.status(200).send(data);
    } catch(error){
      return res.status(500).json({ "message": errorMessage.INTERNAL_SERVER_ERROR })
    }

  }

}