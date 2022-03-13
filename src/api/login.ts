import axios from 'axios'
import { request } from '../utils/request'
const API_URL = process.env.REACT_APP_BACKEND

const register = () => {

}
const login = async (username: string, password: string) => {
    const requestOption = {
        method: "POST",
        url: "/user/passwordLogin",
        payload: {
            username,
            password
        }
    }
    return request(requestOption)
}

const logout = () => {
    localStorage.removeItem("user")
}
export default {
    register,
    login,
    logout
}