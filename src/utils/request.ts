import axios from 'axios'
import { authHeader } from "../api/helps";
const API_URL = process.env.REACT_APP_BACKEND

interface RequestOption {
    method: string,
    url: string
    payload?: any,
}
export const requestWithToken = (request: RequestOption) => {
    const headers = authHeader()
    if (headers) {

        switch (request.method) {
            case 'GET':
                return axios.get(`${API_URL}${request.url}`, {
                    ...request.payload, headers
                }).then((response: any) => {
                    if (response.status === 200) {
                        return response.data
                    }
                })

            case 'POST':
                return axios.post(`${API_URL}${request.url}`, {
                    ...request.payload, headers
                }).then((response: any) => {
                    if (response.status === 200) {
                        return response.data
                    }
                })
        }

    } else {
        throw new Error('no token found')
    }
}


export const request = (request: RequestOption) => {
    switch (request.method) {
        case 'GET':
            return axios.get(`${API_URL}${request.url}`, {
                ...request.payload
            }).then((response: any) => {
                if (response.status === 200) {
                    return response.data
                }
            })

        case 'POST':
            return axios.post(`${API_URL}${request.url}`, {
                ...request.payload
            }).then((response: any) => {
                if (response.status === 200) {
                    return response.data
                }
            })
    }

}
