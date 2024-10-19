import { userLogin } from "../api/login"
import { signup } from "../api/signup"
import { REGISTER, RESETREGISTER } from "../constants/contant"

export const registerUser = (payload) => {
    return {
        type: REGISTER,
        payload,
    }
}

export const resetingRegister = () => {
    return {
        type: RESETREGISTER,
    }
}

export const registeringUser = (user) => {
    return async (dispatch) => {
        try {
            const isUserValid = await signup(user)
            console.log("in action register", isUserValid);
            dispatch(registerUser(isUserValid.data))
        } catch (error) {
            console.log(error);
        }
    }
} 