import { userLogin } from "../api/login"
import { AUTHENTICATE } from "../constants/contant"

export const isUserAuthenticated = (payload) => {
    return {
        type: AUTHENTICATE,
        payload,
    }
}

export const hasUserValidCredentials = (user) => {
    return async (dispatch) => {
        try {
            const isUserValid = await userLogin(user.emailUser, user.password)
            dispatch(isUserAuthenticated(isUserValid.data))
        } catch (error) {
            console.log(error);
        }
    }
} 