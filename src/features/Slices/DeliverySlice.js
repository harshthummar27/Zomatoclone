import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DeliveryRes from '../../Data/DeliveryData';

const initialState={
    DeliveryResData:[]
}

export const DeliverySlice = createSlice(
    {
        name:'Delivery',
        initialState,
        reducers:{
            AddAllDeliveryResData:(state)=>{
                state.DeliveryResData = DeliveryRes 
                // console.log(state.DeliveryResData);
            }
        },    
    
    }
)

export default DeliverySlice.reducer;
export const{AddAllDeliveryResData} = DeliverySlice.actions;