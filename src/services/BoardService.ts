import BoardDAO from "../model/BoardDAO"
import { BoardCreateDto } from  "../dto/Board/BoardCreateDto";
import { CommentCreateDto } from  "../dto/Comment/CommentCreateDto";
import CommentDAO from "../model/CommentDAO";
import dayjs from "dayjs";

export class BoardService {

  public async findAllQuestions() {
    try {
      const foundAllQuesions = await BoardDAO.find({ isQuestion: true });
      return foundAllQuesions
    }
    catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async findBoardsByCourseId(cousreId: string) {
    try {
      const foundBoards = await BoardDAO.find({ course: cousreId });
      return foundBoards;
    }
    catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async findBoardByBoardId(boardId: string) {
    try {
      const foundBoard = await BoardDAO.findById(boardId);
      const foundComments = await CommentDAO.find({ board: boardId });

      return {
        board: foundBoard,
        comments: foundComments
      };
    }
    catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async createBoard(userId: string, courseId: string, boardCreateDto: BoardCreateDto) {

    try {
      
      const currentDate = dayjs().format("YYYY-MM-DD HH:MM");
      const newBoard = new BoardDAO({
        title: boardCreateDto.title,
        content: boardCreateDto.content,
        isQuestion: boardCreateDto.isQuestion,
        writer: userId,
        course: courseId,
        createdAt: currentDate
      });
      
      await newBoard.save();

    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async createComment(userId: string, boardId: string, commentCreateDto: CommentCreateDto) {

    try {
      
      const currentDate = dayjs().format("YYYY-MM-DD HH:MM");
      const newComment = new CommentDAO({
        content: commentCreateDto.content,
        writer: userId,
        board: boardId,
        createdAt: currentDate
      });
      
      await newComment.save();

    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}
