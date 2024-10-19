import { LOGOUT } from "../constants/contant"

export const logoutUser = () => {
    return {
        type: LOGOUT
    }
}