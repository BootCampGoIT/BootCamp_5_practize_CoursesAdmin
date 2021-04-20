import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addGroup } from "../../../../redux/groups/groupsActions";

class AdminGroupsForm extends Component {
  state = {
    name: "",
    students: [],
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://bootcamp5-default-rtdb.firebaseio.com/groups.json`,
        { ...this.state }
      );
      console.log(response.data.name);
      this.props.addGroupItem({ id: response.data.name, ...this.state });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log("props", this.props);
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <button type='submit'>Save group</button>
      </form>
    );
  }
}

// const mapStateToProps = (state) => {
//     return {

//     }
// };

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addGroupItem: (group) => {
      dispatch(addGroup(group));
    },
  };
};

export default connect(null, mapDispatchToProps)(AdminGroupsForm);
