
import {configureStore} from '@reduxjs/toolkit'
import addToCartSlice from './addToCart'
import authSlice from './authSlice'

import userSlice from './userSlice'

const store = configureStore({
reducer:{
    cart:addToCartSlice,
    auth:authSlice,
    user : userSlice ,
}

})


export {store } 