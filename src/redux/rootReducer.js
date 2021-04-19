import { combineReducers } from "redux";
import coursesReducer from "./courses/coursesReducers";
import groupsReducer from "./groups/groupsReducers";
import tutorsReducer from "./tutors/tutorsReducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = {
  key: "courses",
  storage,
  // whitelist: ["items"],
  blacklist: ["filter"],
};

const rootReducer = combineReducers({
  //   auth: () => ({ auth: false }),
  courses: persistReducer(persistConfig, coursesReducer),
  groups: groupsReducer,
  tutors: tutorsReducer,
});

export default rootReducer;
