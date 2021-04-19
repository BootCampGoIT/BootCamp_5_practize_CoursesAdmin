import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  deleteModule,
  editModule,
} from "../../../../redux/courses/coursesActions";
import { moduleListItem } from "./AdminCoursesList.module.css";

const AdminCoursesItem = ({ moduleItem, editModule, deleteModule, name }) => {
  const onHandleDelete = async () => {
    try {
      await axios.delete(
        `https://bootcamp5-default-rtdb.firebaseio.com/courses/${name}/${moduleItem.id}.json`
      );

      deleteModule({ id: moduleItem.id, name });
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleEdit = () => {
    editModule(moduleItem);
  };

  return (
    <li className={moduleListItem}>
      <span>{moduleItem.moduleTitle}</span>
      <button onClick={onHandleDelete}>Delete</button>
      <button onClick={onHandleEdit}>Edit</button>
    </li>
  );
};

export default connect(null, {
  editModule,
  deleteModule,
})(AdminCoursesItem);
