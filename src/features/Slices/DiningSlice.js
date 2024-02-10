import { createSlice } from "@reduxjs/toolkit";
import { DiningData } from "../../Data/DiningData"

const initialState = {
    DiningRes:[]
}
export const DiningSlice = createSlice(
    {
        name:'Dining',
        initialState,
        reducers:{
            AddAllDiningRes(state)
            {
                state.DiningRes = DiningData;
                // console.log(state.DiningRes);
            }
        }
    }
)
export default DiningSlice.reducer;
export const{AddAllDiningRes} = DiningSlice.actions;