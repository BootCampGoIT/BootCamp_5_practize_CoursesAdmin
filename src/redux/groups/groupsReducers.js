import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { getGroups, addGroup, deleteGroup } from "./groupsActions";

const initialState = [];

// const data = [{ groupName: "BootCamp5", students: [], tutors: [] }];

const groupsItems = createReducer(initialState, {
  [getGroups]: (_, { payload }) => [...payload],
  [addGroup]: (state, { payload }) => [...state, payload],
});














const groupsFilter = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const groupsError = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const groupsLoading = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const groupsReducer = combineReducers({
  items: groupsItems,
  filter: groupsFilter,
  error: groupsError,
  loading: groupsLoading,
});

export default groupsReducer;
