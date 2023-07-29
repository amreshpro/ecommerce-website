import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({

name:"addToCart",
initialState:[],
reducers:{

add(state,action){

   
state.push(action.payload)


},

removeCartItem: (state,action)=>{

    state.filter((item,index) => {
        
    
        if(item.id ===action.payload){
             
            state.splice(index,1)
        }

    });
}


},

    


})


export const {add,removeCartItem} = addToCartSlice.actions
export default addToCartSlice.reducer