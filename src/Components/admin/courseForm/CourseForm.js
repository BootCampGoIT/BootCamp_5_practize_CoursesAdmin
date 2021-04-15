import React, { Component } from "react";
import {
  courseForm,
  courseFormSelect,
  courseFormLabel,
  courseFormInput,
  courseFormArea,
  courseFormButton,
} from "./CourseForm.module.css";

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

  onHandleSubmit = (e) => {
    e.preventDefault();
    // if(this.props.editedItem.id ? editItem() :)
    this.props.addCourse(this.state);
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
            type='text'
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

export default CourseForm;
