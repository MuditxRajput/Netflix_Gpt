// store.js or similar file
import { configureStore } from '@reduxjs/toolkit';
import gptReducer from './GptInfo';
import languageReducer from './Language';
import moviesReducer from './MoviesSlices'; // Import moviesReducer directly
import userReducer from './UserSlices'; // Import userReducer directly
const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,  
    gpt : gptReducer,
    language : languageReducer,
  },
});

export default store;
