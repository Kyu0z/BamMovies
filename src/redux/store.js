import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { combineReducers } from "redux";

export const store = configureStore({
  reducer: combineReducers({
    auth: authSlice.reducer,
  }),
});
