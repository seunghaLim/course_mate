import BoardDAO from "../model/BoardDAO"
import CourseDAO from "../model/CourseDAO"

export class BoardService {

  public async findAllQuestions() {
    try {
      const foundAllQuesions = await BoardDAO.find({}, { isQuestion: true });
      return foundAllQuesions
    }
    catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async findAllCourses() {
    try {
      const foundAllCourses = await CourseDAO.find({});
      return foundAllCourses
    }
    catch (error) {
      console.log(error);
      throw error;
    }
  }

}
