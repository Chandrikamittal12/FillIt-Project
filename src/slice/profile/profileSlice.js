import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Guest",
  age: 18,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { updateName, updateAge } = profileSlice.actions;
export default profileSlice.reducer;
