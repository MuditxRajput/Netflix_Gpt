// UserSlices.js or similar file
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user', // Make sure the name property is defined
  initialState: null,
  reducers: {
    addUser: (state, action) => {
        return action.payload
    },
    removeUser: (state) => {
      return null;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
// export const selectUser = (state) => state.user.user;
export default userSlice.reducer;