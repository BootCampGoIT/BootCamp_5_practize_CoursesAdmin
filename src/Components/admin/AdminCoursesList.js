import React from "react";
import {
  coursesList,
  coursesListItem,
  courseTitle,
  modulesList,
  moduleListItem,
} from "./AdminCoursesList.module.css";

const AdminCoursesList = ({ courses, deleteCourse, editCourse }) => {
  const onHandleDelete = (e) => {
    const { id, name } = e.target;
    deleteCourse(id, name);
  };
  const onHandleEdit = (e) => {
    const { id, name } = e.target;
    editCourse(id, name);
  };

  return (
    <ul className={coursesList}>
      {courses.map((course) => (
        <li className={coursesListItem} key={course.name}>
          <h3 className={courseTitle}>{course.name}</h3>
          <ul className={modulesList}>
            {course.modules.map((moduleItem) => (
              <li className={moduleListItem} key={moduleItem.id}>
                <span>{moduleItem.moduleTitle}</span>
                <button
                  onClick={onHandleDelete}
                  id={moduleItem.id}
                  name={course.name}>
                  Delete
                </button>
                <button
                  onClick={onHandleEdit}
                  id={moduleItem.id}
                  name={course.name}>
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default AdminCoursesList;
