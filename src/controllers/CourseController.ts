import { CourseService } from "../services";
import { Request, Response } from "express";

export class CourseController {

    /**
   *  @route GET /courses
   *  @desc find all courses
   *  @access public
   */
  public async findAllCourses (req: Request, res: Response) {

    try {
      const foundCourses = await new CourseService().findAllCourses();
      return res.status(200).send(foundCourses);
    } catch (error){
      return res.status(500).json({ "error": error })
    }
  }

}
