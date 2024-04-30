import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from './quotesSlice'

export const store = configureStore({
    reducer:{
        quotesState:quotesReducer,
    }
})
// ✨ create your `store` in this module
