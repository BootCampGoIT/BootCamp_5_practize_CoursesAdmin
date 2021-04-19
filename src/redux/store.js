import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: rootReducer,
  //   devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);

export default store;

// ====== redux ==============
// import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
