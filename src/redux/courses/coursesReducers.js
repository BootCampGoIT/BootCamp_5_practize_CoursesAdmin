import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";
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

import {
  getCourses,
  addModule,
  deleteModule,
  editModule,
  setCourseLoadingTrue,
  setCourseLoadingFalse,
} from "./coursesActions";

const initialState = [
  { name: "HTML", modules: [] },
  { name: "JavaScript", modules: [] },
  { name: "React", modules: [] },
  { name: "Node", modules: [] },
];
const coursesItems = createReducer(initialState, {
  [getCourses]: (_, { payload }) => [...payload],

  [addModule]: (state, { payload }) => [
    ...state.map((course) =>
      course.name === payload.name
        ? { ...course, modules: [...course.modules, payload] }
        : course
    ),
  ],

  [deleteModule]: (state, { payload }) => [
    ...state.map((course) =>
      course.name === payload.name
        ? {
            ...course,
            modules: [
              ...course.modules.filter((item) => item.id !== payload.id),
            ],
          }
        : course
    ),
  ],

  [editModule]: (state, { payload }) => [
    ...state.map((course) =>
      course.name === payload.name
        ? {
            ...course,
            modules: [
              ...course.modules.map((item) =>
                item.id === payload.id ? { ...item, ...payload } : item
              ),
            ],
          }
        : course
    ),
  ],
});

// ================= redux =================

// const coursesItems = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case GETCOURSES:
//       return [...payload];

//     case ADDMODULE:
//       return [
//         ...state.map((course) =>
//           course.name === payload.name
//             ? { ...course, modules: [...course.modules, payload] }
//             : course
//         ),
//       ];

//     case DELETEMODULE:
//       return [
//         ...state.map((course) =>
//           course.name === payload.name
//             ? {
//                 ...course,
//                 modules: [
//                   ...course.modules.filter((item) => item.id !== payload.id),
//                 ],
//               }
//             : course
//         ),
//       ];

//     // {name: "HTML", id: "fghj", moduleTitle: "Module1", moduleDescription: "asdsadsadsad"}
//     case EDITMODULE:
//       return [
//         ...state.map((course) =>
//           course.name === payload.name
//             ? {
//                 ...course,
//                 modules: [
//                   ...course.modules.map((item) =>
//                     item.id === payload.id ? { ...item, ...payload } : item
//                   ),
//                 ],
//               }
//             : course
//         ),
//       ];

//     default:
//       return state;
//   }
// };

const coursesFilter = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const coursesError = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};
// const coursesLoading = (state = false, action) => {
//   switch (action.type) {
//     case SETLOADINGTRUE:
//       return true;
//     case SETLOADINGFALSE:
//       return false;
//     default:
//       return state;
//   }
// };

const coursesLoading = createReducer(false, {
  [setCourseLoadingTrue]: () => true,
  [setCourseLoadingFalse]: () => false,
});

const coursesReducer = combineReducers({
  items: coursesItems,
  filter: coursesFilter,
  error: coursesError,
  loading: coursesLoading,
});

export default coursesReducer;
