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
    try {
      const response = await axios.post(
        `https://bootcamp5-default-rtdb.firebaseio.com/courses/${this.state.name}.json`,
        {
          moduleTitle: this.state.moduleTitle,
          moduleDescription: this.state.moduleDescription,
        }
      );
      this.props.addModule({ id: response.data.name, ...this.state });
    } catch (error) {
      console.log(error);
    }
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

export default connect(null, { addModule })(CourseForm);
