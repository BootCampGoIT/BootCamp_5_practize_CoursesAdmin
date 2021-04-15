import React, { Component } from "react";
import axios from "axios";
import CourseForm from "./courseForm/CourseForm";
import AdminCoursesList from "./AdminCoursesList";

class AdminCourses extends Component {
  state = {
    courses: [
      { name: "HTML", modules: [] },
      { name: "JavaScript", modules: [] },
      { name: "React", modules: [] },
      { name: "Node", modules: [] },
    ],
    editedItem: {},
  };

  componentDidMount() {
    this.getCourses();
  }

  editCourse = (id, name) => {
    const element = this.state.courses
      .find((course) => course.name === name)
      .modules.find((item) => item.id === id);
    this.setState({ editedItem: { name, ...element } });
  };

  deleteCourse = async (id, name) => {
    try {
      await axios.delete(
        `https://bootcamp5-default-rtdb.firebaseio.com/courses/${name}/${id}.json`
      );
      this.setState((prevState) => ({
        courses: [
          ...prevState.courses.map((course) =>
            course.name === name
              ? {
                  ...course,
                  modules: [...course.modules.filter((item) => item.id !== id)],
                }
              : course
          ),
        ],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  getCourses = async () => {
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
        this.setState({ courses });
      }
    } catch (error) {
      console.log(error);
    }
  };

  addCourse = async (data) => {
    try {
      const response = await axios.post(
        `https://bootcamp5-default-rtdb.firebaseio.com/courses/${data.name}.json`,
        {
          moduleTitle: data.moduleTitle,
          moduleDescription: data.moduleDescription,
        }
      );

      this.setState((prevState) => ({
        courses: [
          ...prevState.courses.map((courseItem) =>
            courseItem.name === data.name
              ? {
                  ...courseItem,
                  modules: [
                    ...courseItem.modules,
                    {
                      id: response.data.name,
                      moduleTitle: data.moduleTitle,
                      moduleDescription: data.moduleDescription,
                    },
                  ],
                }
              : courseItem
          ),
        ],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <h2>Admin Page</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CourseForm addCourse={this.addCourse} editedItem={this.state.editedItem}/>
          <AdminCoursesList
            courses={this.state.courses}
            deleteCourse={this.deleteCourse}
            editCourse={this.editCourse}
          />
        </div>
      </>
    );
  }
}

export default AdminCourses;
