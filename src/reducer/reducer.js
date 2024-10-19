import { combineReducers } from "@reduxjs/toolkit";
import { authenticationReducer } from "./authentication";
import { cartReducer } from "./cart";

const rootReducer = combineReducers({
    auth: authenticationReducer,
    cart: cartReducer,
})

export default rootReducer;