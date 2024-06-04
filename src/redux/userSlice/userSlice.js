import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null,
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload;
            //removing any prev user
            sessionStorage.removeItem('user')
            sessionStorage.setItem('user',JSON.stringify(action.payload));
        },
        removeUser:(state)=>{
            state.user=null;
            sessionStorage.removeItem('user');
        },
    },
})

export const {setUser,removeUser}=userSlice.actions;