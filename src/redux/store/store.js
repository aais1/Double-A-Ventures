import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../cartSlice/cartSlice";
import { userSlice } from "../userSlice/userSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        user:userSlice.reducer,
    }
})


export default store;