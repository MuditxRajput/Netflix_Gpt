import { createSlice } from "@reduxjs/toolkit";

const MoviesSlices = createSlice({
    name:"Movies",
    initialState:{nowPlayingMovies:[],key:null,popularMovies:[],upComingMovies:[]},
    reducers:
    {
       addNowPlayingMovies :(state,action)=>{
        state.nowPlayingMovies=action.payload;
       } ,
       addPopularMovies:(state,action)=>{
        state.popularMovies = action.payload;
       },
       addUpComingMovies:(state,action)=>{
        state.upComingMovies = action.payload
       },
       addKey :(state,action)=>{
        state.key = action.payload
       }
    }
})
export const{addNowPlayingMovies,addKey,addPopularMovies,addUpComingMovies} = MoviesSlices.actions;
export default MoviesSlices.reducer;