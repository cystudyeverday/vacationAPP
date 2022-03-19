import axios from 'axios'
import { requestWithFormData, request } from '../utils/request'
const API_URL = process.env.REACT_APP_BACKEND

type LoginType = 'password' | 'email' | 'phone'
type CodeType = 'email' | 'phone'

const register = () => {

}
const getCode = (username: string, type: CodeType = 'email') => {
    if (type === 'email') {
        const requestOption = {
            method: "POST",
            url: "/user/emailCode",
            payload: { email: username }
        }
        return requestWithFormData(requestOption)

    } else {
        const requestOption = {
            method: "POST",
            url: "/user/emailCode",
            payload: { phone: username }
        }
        return requestWithFormData(requestOption)
    }
}




const login = async (payload: object, type: LoginType = 'password') => {
    const requestOption = {
        method: "POST",
        url: `/user/${type}Login`,
        payload: payload
    }
    return request(requestOption)

}

const logout = () => {
    localStorage.removeItem("user")
}
export default {
    register,
    login,
    logout,
    getCode
}