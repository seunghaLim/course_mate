import { BoardService } from "../services";
import { Request, Response } from "express";

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
      return res.status(500).json({ "error": error })
    }
  }


}