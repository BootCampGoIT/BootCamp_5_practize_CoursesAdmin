import React, { Component } from "react";

import CourseForm from "./adminCoursesForm/AdminCoursesForm";
import AdminCoursesList from "./adminCoursesList/AdminCoursesList";

class AdminCourses extends Component {
  state = {
    editedItem: {},
  };

  // componentDidMount() {
  //   console.dir(JSON.parse(localStorage.getItem("persist:courses")).items);
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.dir(JSON.parse(localStorage.getItem("persist:courses")).items);
  // }

  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CourseForm
          // editedItem={this.state.editedItem}
          />
          <AdminCoursesList />
        </div>
      </>
    );
  }
}

export default AdminCourses;
