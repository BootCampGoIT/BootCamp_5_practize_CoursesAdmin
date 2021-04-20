// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";
// import { persistStore } from "redux-persist";

// const store = configureStore({
//   reducer: rootReducer,
//   //   devTools: process.env.NODE_ENV !== "production",
// });
// export const persistor = persistStore(store);

// export default store;

// ====== redux ==============
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// const middleWares = [thunk];
const enhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;

console.dir(store);
