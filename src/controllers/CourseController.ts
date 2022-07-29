import { CourseService } from "../services";
import { Request, Response } from "express";
import { errorMessage } from "../module/errorMessage";

export class CourseController {

    /**
   *  @route GET /courses
   *  @desc find all courses
   *  @access public
   */
  public async findAllCourses (req: Request, res: Response) {

    const { school } = req.query;
    try {
      const service = new CourseService();
      const foundCourses = await service.findAllCourses((school as string));
      return res.status(200).send(foundCourses);
    } catch (error){
      return res.status(500).json({ "message": errorMessage.INTERNAL_SERVER_ERROR })
    }
  }

}
