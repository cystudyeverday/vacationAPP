import axios from "axios";
import { authHeader } from "./helps";
const API_URL = process.env.REACT_APP_BACKEND
const getUserBoard = () => {
    const headers = authHeader()
    if (headers) {
        return axios.get(API_URL + "user", { headers })
    };
};