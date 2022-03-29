import axios from 'axios'
import { authHeader } from "../api/helps";
const queryString = require('query-string');
const API_URL = process.env.REACT_APP_BACKEND
const ARTICLE_URL = process.env.REACT_APP_ARTICLE

interface RequestOption {
    method: string,
    url: string
    payload?: any,
    endpoint?: string
}

export const requestWithToken = ({ endpoint = API_URL, ...request }: RequestOption) => {
    const headers = authHeader()
    console.log(endpoint)
    if (headers) {
        switch (request.method) {
            case 'GET':
                return axios.get(`${endpoint}${request.url}`, {
                    ...request.payload, headers
                }).then((response: any) => {
                    if (response.status === 200) {
                        return response.data
                    }
                })

            case 'POST':
                return axios.post(`${endpoint}${request.url}`, {
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


export const request = ({ endpoint = API_URL, ...request }: RequestOption) => {
    switch (request.method) {
        case 'GET':
            return axios.get(`${endpoint}${request.url}`, {
                ...request.payload
            }).then((response: any) => {
                if (response.status === 200) {
                    return response.data
                }
            })

        case 'POST':
            return axios.post(`${endpoint}${request.url}`, {
                ...request.payload
            }).then((response: any) => {
                if (response.status === 200) {
                    return response.data
                }
            })
    }

}

export const requestWithFormData = ({ endpoint = API_URL, ...request }: RequestOption) => {
    const query = queryString.stringify(request.payload)
    switch (request.method) {
        case 'GET':
            return axios.get(`${endpoint}${request.url}`, query).then((response: any) => {
                if (response.status === 200) {
                    return response.data
                }
            })

        case 'POST':
            return axios.post(`${endpoint}${request.url}`, query).then((response: any) => {
                if (response.status === 200) {
                    return response.data
                }
            })
    }

}
