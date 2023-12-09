import { createSlice } from "@reduxjs/toolkit";

const Language = createSlice({
  name: "language", // Fix the typo here
  initialState: {
    lan: "English",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.lan = action.payload;
    },
  },
});

export default Language.reducer;
export const { setLanguage } = Language.actions;
