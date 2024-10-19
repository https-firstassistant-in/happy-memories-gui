import { AUTHENTICATE, LOGOUT, REGISTER, RESETREGISTER } from "../constants/contant";

const authenticationState = {
    isUserLoggedIn : false,
    loginMessage : "",
    username : "",
    userHasRegistered : null,
    registerMessage : ""
}

export const authenticationReducer = (state = authenticationState, action) => {
    switch(action.type) {
        case AUTHENTICATE : 
            return {
                ...state,
                isUserLoggedIn: action.payload.success,
                loginMessage : action.payload.message,
                username: action.payload.userDTO.firstname,
            }
        case REGISTER : 
            return {
                ...state,
                userHasRegistered: action.payload.success,
                registerMessage : action.payload.message
            }
        case LOGOUT: 
            return {
                ...state,
                isUserLoggedIn: false,
                loginMessage: '',
                username: "",
            }

        case RESETREGISTER: 
            return {
                ...state,
                userHasRegistered: false,
                registerMessage: '',
            }
        default:
            return state;
    }
}