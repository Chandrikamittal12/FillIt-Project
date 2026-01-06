import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,           // yaha username / user object aayega
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    // ✅ LOGIN SUCCESS
    loginSuccess: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload;

      state.user = user;                 // username ya user object
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isAuthenticated = true;
    },

    // ✅ LOGOUT
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
