import React from "react";
import { NavLink } from "react-router-dom";
import {
  coursesList,
  coursesListItem,
  courseTitle,
  modulesList,
  moduleListItem,
  moduleLink,
  activeModuleLink,
} from "./CoursesList.module.css";

// { name: "HTML", modules: [{},{},{}] },
const CoursesList = ({ courses }) => {
  return (
    <ul className={coursesList}>
      {courses.map((course) => (
        <li className={coursesListItem} key={course.name}>
          <h2 className={courseTitle}>{course.name}</h2>
          <ul className={modulesList}>
            {course.modules.map((moduleItem) => (
              <li className={moduleListItem} key={moduleItem.id}>
                <NavLink
                  to={`/courses/${course.name}/${moduleItem.id}`}
                  className={moduleLink}
                  activeClassName={activeModuleLink}>
                  {moduleItem.moduleTitle}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;
