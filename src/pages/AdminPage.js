import axios from "axios";
import React, { Component } from "react";
import CourseForm from "../Components/courses/courseForm/CourseForm";

class AdminPage extends Component {
  state = {
    courses: [
      { name: "HTML", modules: [] },
      { name: "JavaScript", modules: [] },
      { name: "React", modules: [] },
      { name: "Node", modules: [] },
    ],
  };

  //{ name: "HTML", moduleTitle: "элемент datalist", moduleDescription: "lorem dfghjk" }

  addCourse = async (data) => {
    try {
      const response = await axios.post(
        `https://bootcamp5-default-rtdb.firebaseio.com/courses/${data.name}.json`,
        {
          moduleTitle: data.moduleTitle,
          moduleDescription: data.moduleDescription,
        }
      );
      // console.log(response);
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
        <CourseForm addCourse={this.addCourse} />
      </>
    );
  }
}

export default AdminPage;
