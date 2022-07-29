import CourseDAO from "../model/CourseDAO"

export class CourseService {
  public async findAllCourses(school: string) {
    try {
      const foundAllCourses = await CourseDAO.find({ school: school });
      return foundAllCourses
    }
    catch (error) {
      console.log(error);
      throw error;
    }
  }

}
