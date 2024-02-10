import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CartItem:[]    
}

export const CartSlice = createSlice({
    name:'Cart',
    initialState,
    reducers:{
        AddCartItem:(state,action)=>{
            state.CartItem.push(action.payload);
        },
        RemoveCartItem:(state,action)=>{
           state.CartItem = state.CartItem.filter((item)=>(
                item.id !== action.payload
           ))
        }
    }
});

export default CartSlice.reducer;
export const{AddCartItem,RemoveCartItem}= CartSlice.actions