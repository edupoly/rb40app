import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
    name:"TodolistSLS",
    initialState:{
        todos:['get house','make money']
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todos.splice(action.payload,1)
        }
    }
})

export const {addTodo,deleteTodo} = todolistSlice.actions
const todolistReducer = todolistSlice.reducer;
export default todolistReducer;