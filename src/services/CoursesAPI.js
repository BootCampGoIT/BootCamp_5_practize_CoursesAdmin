import axios from "axios";

const getCourses = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/courses.json`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const addCourseItem = async (course) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/courses.json`,
      course
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCourseItem = async (id) => {
  try {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/courses/${id}.json`
    );
  } catch (error) {
    throw new Error(error);
  }
};

export { getCourses, addCourseItem, deleteCourseItem };
