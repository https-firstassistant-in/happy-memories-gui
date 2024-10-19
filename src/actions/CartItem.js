import { ADD_ITEM_IN_CART, REMOVE_ITEM_IN_CART } from "../constants/contant"

export const isItemAdded = (payload) => {
    return {
        type: ADD_ITEM_IN_CART,
        payload,
    }
}

export const isItemRemoved = (payload) => {
    return {
        type: REMOVE_ITEM_IN_CART,
        payload,
    }
}

export const addingItem = (itemId) => {
    return (dispatch) => {
        dispatch(isItemAdded(itemId))
    }
} 

export const removingItem = (itemId) => {
    return (dispatch) => {
        dispatch(isItemRemoved(itemId))
    }
} 