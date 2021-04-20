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

import { getCoursesOperation } from "../../../../redux/courses/coursesOperations";

class AdminCoursesList extends Component {
  componentDidMount() {
    this.props.getCoursesOperation();
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    getCoursesOperation: () => {
      dispatch(getCoursesOperation())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCoursesList);
