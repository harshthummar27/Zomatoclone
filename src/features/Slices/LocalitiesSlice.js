import { createSlice } from "@reduxjs/toolkit";
import { localities } from "../../Data/localities";

const initialState = {
    localities:[],
}
export const LocalitiesSlice = createSlice({
    name:'Localities',
    initialState,
    reducers:{
        AddLocalities:(state)=>{
            state.localities = [];
            for(let i=0; i<=7; i++)
            {
                state.localities.push(localities[i]);
            }
        },

        AllAddLocalities:(state)=>{
            state.localities = localities;
        }
    },



})

export default LocalitiesSlice.reducer
export const{AddLocalities,AllAddLocalities} = LocalitiesSlice.actions;