import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/reducer";
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 


const store = configureStore({
    reducer :rootReducer, 
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
    ]
})

export default store;