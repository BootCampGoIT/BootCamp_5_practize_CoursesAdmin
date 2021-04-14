import React, { Component } from "react";

const coursesName = ["HTML", "JavaScript", "React", "Node"];

const initialState = { name: "HTML", moduleTitle: "", moduleDescription: "" };

class CourseForm extends Component {
  state = {
    ...initialState,
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addCourse(this.state);
    this.setState({ ...initialState });
  };

  render() {
    const { name, moduleTitle, moduleDescription } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <select name='name' value={name} onChange={this.onHandleChange}>
          {coursesName.map((courseItem) => (
            <option value={courseItem} key={courseItem}>
              {courseItem}
            </option>
          ))}
        </select>
        <label>
          Title
          <input
            type='text'
            name='moduleTitle'
            value={moduleTitle}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Description
          <textarea
            type='text'
            name='moduleDescription'
            value={moduleDescription}
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>Save module</button>
      </form>
    );
  }
}

export default CourseForm;
