import { combineReducers } from "redux";

const tutorsItems = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const tutorsFilter = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const tutorsError = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const tutorsLoading = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const tutorsReducer = combineReducers({
  items: tutorsItems,
  filter: tutorsFilter,
  error: tutorsError,
  loading: tutorsLoading,
});

export default tutorsReducer;
