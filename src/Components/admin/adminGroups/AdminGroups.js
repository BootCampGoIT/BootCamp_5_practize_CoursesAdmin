import React, { Component } from "react";
import AdminGroupsForm from "./adminGroupsForm/AdminGroupsForm";
import AdminGroupsList from "./adminGroupsList/AdminGroupsList";

class AdminGroups extends Component {
  state = {};
  render() {
    return (
      <>
        <AdminGroupsForm />
        <AdminGroupsList />
      </>
    );
  }
}

export default AdminGroups;
