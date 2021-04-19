import {
  GETCOURSES,
  ADDMODULE,
  DELETEMODULE,
  EDITMODULE,
  SETFILTER,
  SETERROR,
  RESETERROR,
  SETLOADINGTRUE,
  SETLOADINGFALSE,
} from "./coursesConstants";
import { createAction } from "@reduxjs/toolkit";

//  =========== courses ============
const getCourses = createAction("@courses/getCourses");

// ========+=== modules ============
const addModule = createAction(ADDMODULE);
const deleteModule = createAction(DELETEMODULE);
const editModule = createAction(EDITMODULE);

// ================= redux =============================
// const getCourses = (courses) => ({
//   type: GETCOURSES,
//   payload: courses,
// });

// const addModule = (moduleItem) => ({
//   type: ADDMODULE,
//   payload: moduleItem,
// });

// const deleteModule = (moduleItem) => ({
//   type: DELETEMODULE,
//   payload: moduleItem,
// });
// const editModule = (moduleItem) => ({
//   type: EDITMODULE,
//   payload: moduleItem,
// });

const setCourseFilter = (value) => ({
  type: SETFILTER,
  payload: value,
});

const setCourseError = (error) => ({
  type: SETERROR,
  payload: error,
});

const resetCourseError = () => ({
  type: RESETERROR,
});

const setCourseLoadingTrue = () => ({
  type: SETLOADINGTRUE,
});

const setCourseLoadingFalse = () => ({
  type: SETLOADINGFALSE,
});

export {
  getCourses,
  addModule,
  deleteModule,
  editModule,
  setCourseFilter,
  setCourseError,
  resetCourseError,
  setCourseLoadingTrue,
  setCourseLoadingFalse,
};
