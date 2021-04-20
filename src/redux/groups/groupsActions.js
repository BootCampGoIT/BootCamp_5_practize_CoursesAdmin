import { createAction } from "@reduxjs/toolkit";

const getGroups = createAction("@getGroups");
const addGroup = createAction("@groups/addGroups");
const deleteGroup = createAction("@groups/deleteGroup");
const editGroup = createAction("@groups/editGroup");

export { getGroups, addGroup, deleteGroup, editGroup };
