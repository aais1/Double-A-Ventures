import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
    totalAmount:0,
    totalQuantity:0,
}

export const cartSlice= createSlice({
    name:"cart",
    initialState,
    //todo: reducers
    reducers:{
        addToCart:(state,action)=>{},
        removeFromCart:(state,action)=>{},
        increaseQuantity:(state,action)=>{},
        decreaseQuantity:(state,action)=>{},
        clearCart:(state,action)=>{},
    }
})