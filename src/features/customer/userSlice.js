import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"UserSLS",
    initialState:{user:{}},
    reducers:{
        login:(state,action)=>{ state.user=action.payload },
        logout:(state)=>{ state.user={} },
        // dec:(state)=>{state.count--},
        // reset:(state)=>{state.count=0}
    }
})
export const {login,logout} = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer