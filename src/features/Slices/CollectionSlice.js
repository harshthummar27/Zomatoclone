import { createSlice } from "@reduxjs/toolkit";
import { collection } from "../../Data/collection";

const initialState = {
    collectiones:[]
}
export const CollectionSlice = createSlice(
    {
        name:'Collection',
        initialState,
        reducers:{
            AddCollection:(state)=>{
                state.collectiones = [];
                for(let i=0; i<=3; i++)
                {
                    state.collectiones.push(collection[i]);
                }
            },
            AddAllCollection:(state)=>{
                state.collectiones = collection;
            }
        }
    }
)

export default CollectionSlice.reducer;
export const{AddCollection, AddAllCollection} = CollectionSlice.actions;