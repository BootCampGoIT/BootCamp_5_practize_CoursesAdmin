import React from "react";
import { NavLink } from "react-router-dom";

// { name: "HTML", modules: [{},{},{}] },
const CoursesList = ({ courses }) => {
  return (
    <ul className='coursesList'>
      {courses.map((course) => (
        <li className='coursesListItem' key={course.name}>
          <h2>{course.name}</h2>
          <ul className='modulesList'>
            {course.modules.map((moduleItem) => (
              <li className='moduleListItem' key={moduleItem.id}>
                <NavLink to={`/courses/${course.name}/${moduleItem.id}`}>
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
