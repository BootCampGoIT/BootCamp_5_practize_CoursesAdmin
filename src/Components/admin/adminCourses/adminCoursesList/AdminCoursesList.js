import React, { Component } from "react";
import AdminCoursesItem from "./AdminCoursesItem";
import {
  coursesList,
  coursesListItem,
  courseTitle,
  modulesList,
  moduleListItem,
} from "./AdminCoursesList.module.css";

import { connect } from "react-redux";
import axios from "axios";
import { getCourses } from "../../../../redux/courses/coursesActions";

class AdminCoursesList extends Component {
  componentDidMount() {
    this.getCourses();
  }

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
        this.props.getCourses(courses);
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <ul className={coursesList}>
        {this.props.courses.map((course) => (
          <li className={coursesListItem} key={course.name}>
            <h3 className={courseTitle}>{course.name}</h3>
            <ul className={modulesList}>
              {course.modules.map((moduleItem) => (
                <AdminCoursesItem
                  moduleItem={moduleItem}
                  key={moduleItem.id}
                  name={course.name}
                />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses.items,
  };
};

export default connect(mapStateToProps, { getCourses })(AdminCoursesList);
