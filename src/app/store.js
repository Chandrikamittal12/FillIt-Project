import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counter/counterSlice";
import profileReducer from "../slice/profile/profileSlice";
import authReducer from "../slice/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
    auth: authReducer,   // ✅ added
  },
});
