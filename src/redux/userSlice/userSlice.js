import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload;
            console.log(state.user)
        },
        removeUser:(state)=>{
            state.user=null;
        },
    },
})

export const {setUser,removeUser}=userSlice.actions;