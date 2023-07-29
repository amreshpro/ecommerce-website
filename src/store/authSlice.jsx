import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: false,
    reducers: {

        isAuth(state, action) {
if(action.payload) return state = true

        }
    }
})



export const {isAuth} = authSlice.actions
export default authSlice.reducer