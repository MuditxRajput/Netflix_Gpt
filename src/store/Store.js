// store.js or similar file
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './MoviesSlices'; // Import moviesReducer directly
import userReducer from './UserSlices'; // Import userReducer directly

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,  // Make sure this matches the slice name
  },
});

export default store;
