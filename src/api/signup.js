import axios from "axios";
import { BASE_URL } from "./base";

export const signup = async (user) => {
    console.log("user ->", user)
    return await axios.post(BASE_URL +`/signup`, user);
}