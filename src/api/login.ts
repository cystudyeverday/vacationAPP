import axios from 'axios'
import { request } from '../utils/request'
const API_URL = process.env.REACT_APP_BACKEND

const register = () => {

}
const login = (username: string, password: string) => {
    // console.log(API_URL)
    // return axios.post(`${API_URL}/user/passwordLogin`, {
    //     username,
    //     password
    // }).then((response: any) => {
    //     console.log(response)
    //     if (response.status === 200) {
    //         localStorage.setItem("user", JSON.stringify(response.data))
    //     }
    //     return response.data
    // })
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