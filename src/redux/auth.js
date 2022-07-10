import { createSlice } from "@reduxjs/toolkit";
import { setAPIToken } from "../api/axiosClient";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
      if (payload) {
        setAPIToken(payload);
        localStorage.setItem("token", JSON.stringify(payload));
      } else {
        localStorage.removeItem("token");
      }
    },
  },
});

export const { setUser, setToken } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export const selectIsLoggedIn = (state) => selectUser(state) !== null;
