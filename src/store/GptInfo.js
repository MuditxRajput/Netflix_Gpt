import { createSlice } from "@reduxjs/toolkit";

const GptInfo = createSlice({
    name:"gpt",
    initialState:{search:false},
    reducers:{
        setSearch : (state)=>{
          state.search = !state.search;
        }
    }
})
export default GptInfo.reducer;
export const{setSearch} = GptInfo.actions;