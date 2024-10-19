import axios from "axios";
import { BASE_URL } from "./base";

export const userLogin = async (emailUser, password) => {
    console.log("login user ->", emailUser, password)
    return await axios.post(`${BASE_URL}/login-user/${emailUser}/${password}`);
}