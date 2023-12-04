import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "./studentApi";
import cartReducer from "./cartSlice"

const store = configureStore({
    reducer:{
        cart:cartReducer,
        [studentApi.reducerPath]: studentApi.reducer
    },
    middleware:(getDefaultMiddleware)=>(
        getDefaultMiddleware().concat(studentApi.middleware)
    ),
})

export default store