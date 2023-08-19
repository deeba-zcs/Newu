import { configureStore } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";

import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import dataslice from "./dataslice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  data: dataslice,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
});
export default store;
