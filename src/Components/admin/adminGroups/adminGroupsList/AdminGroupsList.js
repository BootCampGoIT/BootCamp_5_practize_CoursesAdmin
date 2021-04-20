import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCoursesOperation } from "../../../../redux/courses/coursesOperations";
import { getGroups } from "../../../../redux/groups/groupsActions";

class AdminGroupsList extends Component {
  async componentDidMount() {
    this.props.getCoursesOperation();
  }
  render() {
    return (
      <ul>
        {this.props.groups.map((group) => (
          <li key={group.id}>
            <h2>{group.name}</h2>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoursesOperation: () => {
      dispatch(getCoursesOperation());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminGroupsList);
