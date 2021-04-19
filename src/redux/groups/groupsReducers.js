import { combineReducers } from "redux";


const groupsItems = (state = [], action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
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
  