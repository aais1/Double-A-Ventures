import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
    totalAmount:0,
    totalQuantity:0,
}

export const cartSlice= createSlice({
    name:"cart",
    initialState,
    //todo: reducers
    reducers:{
        addToCart:(state,{payload})=>{
            console.log('run')
            state.cartItems=[
                payload,
                ...state.cartItems
            ]
        },
        removeFromCart:(state,action)=>{},
        increaseQuantity:(state,action)=>{},
        decreaseQuantity:(state,action)=>{},
        clearCart:(state,action)=>{},
    }
})

 export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart    
} = cartSlice.actions;