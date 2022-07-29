import CourseDAO from "../model/CourseDAO"

export class CourseService {
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
