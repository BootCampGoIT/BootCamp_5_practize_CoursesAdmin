import React, { Component } from "react";
import {
  courseForm,
  courseFormSelect,
  courseFormLabel,
  courseFormInput,
  courseFormArea,
  courseFormButton,
} from "./AdminCoursesForm.module.css";

import { connect } from "react-redux";
import { addModule } from "../../../../redux/courses/coursesActions";
import axios from "axios";
import { addModuleOperation } from "../../../../redux/courses/coursesOperations";

const coursesName = ["HTML", "JavaScript", "React", "Node"];

const initialState = { name: "HTML", moduleTitle: "", moduleDescription: "" };

class CourseForm extends Component {
  state = {
    ...initialState,
  };

  componentDidUpdate(prevProps, prevState) {
    prevProps.editedItem !== this.props.editedItem &&
      this.setState({ ...this.props.editedItem });
  }

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    this.props.addModuleOperation(this.state);
    this.setState({ ...initialState });
  };

  render() {
    const { name, moduleTitle, moduleDescription } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit} className={courseForm}>
        <label className={courseFormLabel}>
          Course name
          <select
            name='name'
            value={name}
            onChange={this.onHandleChange}
            className={courseFormSelect}>
            {coursesName.map((courseItem) => (
              <option value={courseItem} key={courseItem}>
                {courseItem}
              </option>
            ))}
          </select>
        </label>
        <label className={courseFormLabel}>
          Title
          <input
            type='text'
            name='moduleTitle'
            value={moduleTitle}
            onChange={this.onHandleChange}
            className={courseFormInput}
          />
        </label>
        <label className={courseFormLabel}>
          Description
          <textarea
            name='moduleDescription'
            value={moduleDescription}
            onChange={this.onHandleChange}
            className={courseFormArea}
          />
        </label>
        <button type='submit' className={courseFormButton}>
          Save module
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addModuleOperation: (moduleItem) => {
      dispatch(addModuleOperation(moduleItem));
    },
  };
};
export default connect(null, mapDispatchToProps)(CourseForm);
