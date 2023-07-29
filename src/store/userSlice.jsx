import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({

name:"userDetails",
initialState:{},
reducers:{
    userLoginDetailsForStore :(state,action)=>{

        state = action.payload
        return state
  
    }

}

})


export const {userLoginDetailsForStore} = userSlice.actions
export default userSlice.reducer