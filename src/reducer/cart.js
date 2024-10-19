import { ADD_ITEM_IN_CART, REMOVE_ITEM_IN_CART } from "../constants/contant";

const cartItemState = {
    totalItemInCart : 0,
}

export const cartReducer = (state = cartItemState, action) => {
    console.log("reducer in cart", action.payload)
    switch(action.type) {
        case ADD_ITEM_IN_CART : 
            return {
                ...state,
                totalItemInCart: state.totalItemInCart + 1
            }
        case REMOVE_ITEM_IN_CART : 
            return {
                ...state,
                totalItemInCart: state.totalItemInCart > 0 ? state.totalItemInCart - 1 : 0
            }
        default:
            return state;
    }
}