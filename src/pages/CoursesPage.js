import axios from "axios";
import React, { Component } from "react";
import { Route } from "react-router-dom";

import CoursesList from "../Components/courses/coursesList/CoursesList";
import ModuleDescription from "../Components/courses/ModuleDescription";
import { content, leftSide } from "./CoursesPage.module.css";

class CoursesPage extends Component {
  state = {
    courses: [],
    prevPosition: "",
  };
  async componentDidMount() {
    this.setState({ prevPosition: this.props.location.prevPosition });
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
        this.setState({ courses });
      }
    } catch (error) {
      console.log(error);
    }
  }

  goBack = () => {
    this.props.history.push({
      pathname: this.state.prevPosition,
      // search: "query=cat"
    });
  };
  render() {
    return (
      <>
        <h2>Courses</h2>
        <button onClick={this.goBack}>Go Back</button>
        <div className={content}>
          <div className={leftSide}>
            <CoursesList courses={this.state.courses} />
          </div>
          <div className='description'>
            <Route
              path={`${this.props.match.url}/:courseName/:moduleId`}
              component={ModuleDescription}
            />
          </div>
        </div>
      </>
    );
  }
}

export default CoursesPage;
