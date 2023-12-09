import { createSlice } from "@reduxjs/toolkit";

const GptInfo = createSlice({
    name:"gpt",
    initialState:{search:false,moviesName: null,SearchedMovies : null},
    reducers:{
        setSearch : (state)=>{
          state.search = !state.search;
        },
        setSearchedMovies: (state,action)=>{
          state.SearchedMovies = action.payload;
        },
        setMoviesName : (state,action)=>{
          state.moviesName = action.payload
        }
    }
})
export default GptInfo.reducer;
export const{setSearch,setSearchedMovies,setMoviesName} = GptInfo.actions;