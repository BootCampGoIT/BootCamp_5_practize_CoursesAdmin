import axios from "axios";
import {
  addModule,
  getCourses,
  setCourseLoadingFalse,
  setCourseLoadingTrue,
} from "./coursesActions";

const getCoursesOperation = () => async (dispatch) => {
  dispatch(setCourseLoadingTrue());
  try {
    const response = await axios.get(
      `https://bootcamp5-default-rtdb.firebaseio.com/courses.json`
    );
    if (response.data) {
      const courses = Object.keys(response.data).map((key) => ({
        name: key,
        modules: [
          ...Object.keys(response.data[key]).map((item) => ({
            id: item,
            ...response.data[key][item],
          })),
        ],
      }));
      dispatch(getCourses(courses));
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setCourseLoadingFalse());
  }
};

const addModuleOperation = (moduleItem) => async (dispatch, getState) => {
  dispatch(setCourseLoadingTrue());
  try {
    const response = await axios.post(
      `https://bootcamp5-default-rtdb.firebaseio.com/courses/${moduleItem.name}.json`,
      {
        moduleTitle: moduleItem.moduleTitle,
        moduleDescription: moduleItem.moduleDescription,
      }
    );
    dispatch(addModule({ id: response.data.name, ...moduleItem }));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setCourseLoadingFalse());
  }
};

export { getCoursesOperation, addModuleOperation };
