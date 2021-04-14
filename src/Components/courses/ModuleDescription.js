import axios from "axios";
import React, { Component } from "react";

class ModuleDescription extends Component {
  state = {
    module: { moduleTitle: "", moduleDescription: "" },
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://bootcamp5-default-rtdb.firebaseio.com/courses/${this.props.match.params.courseName}/${this.props.match.params.moduleId}.json`
      );

      this.setState({ module: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.moduleId !== this.props.match.params.moduleId) {
      try {
        const response = await axios.get(
          `https://bootcamp5-default-rtdb.firebaseio.com/courses/${this.props.match.params.courseName}/${this.props.match.params.moduleId}.json`
        );

        this.setState({ module: response.data });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    // console.log(this.props.match.params);

    return (
      <>
        {this.props.match.params.moduleId && (
          <>
            <h2>Module description</h2>
            <p>Course: {this.props.match.params.courseName}</p>
            <p>Title: {this.state.module.moduleTitle}</p>
            <p>Description: {this.state.module.moduleDescription}</p>
          </>
        )}
      </>
    );
  }
}

export default ModuleDescription;
