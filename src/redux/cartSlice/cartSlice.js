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
            const exists=state.cartItems.find(item=>item.id===payload.id);
            if(exists){
                state.cartItems=state.cartItems.map(item=>item.id===payload.id?{...item,quantity:item.quantity+1}:item);
                state.totalAmount+=payload.price;
                state.totalQuantity+=1;
                return;
            }
            state.cartItems=[
                payload,
                ...state.cartItems
            ]
            state.totalAmount+=payload.price;
            state.totalQuantity+=1;
        },
        removeFromCart:(state,action)=>{},
        increaseQuantity:(state,action)=>{
            const index=state.cartItems.findIndex(item=>item.id===action.payload);
            state.cartItems[index].quantity+=1;
            state.totalAmount+=state.cartItems[index].price;
            state.totalQuantity+=1;
        },
        decreaseQuantity:(state,action)=>{
            const index=state.cartItems.findIndex(item=>item.id===action.payload);
            if(state.cartItems[index].quantity>1){
                state.cartItems[index].quantity-=1;
                state.totalAmount-=state.cartItems[index].price;
                state.totalQuantity-=1;
            }
        },
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