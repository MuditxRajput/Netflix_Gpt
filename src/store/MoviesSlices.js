import { createSlice } from "@reduxjs/toolkit";

const MoviesSlices = createSlice({
    name:"Movies",
    initialState:{nowPlayingMovies:{},key:null},
    reducers:
    {
       addNowPlayingMovies :(state,action)=>{
        state.nowPlayingMovies=action.payload;
       } ,
       addKey :(state,action)=>{
        state.key = action.payload
       }
    }
})
export const{addNowPlayingMovies,addKey} = MoviesSlices.actions;
export default MoviesSlices.reducer;