import axios from 'axios'
import { authHeader } from "../api/helps";
const queryString = require('query-string');
const API_URL = process.env.REACT_APP_BACKEND
const ARTICLE_URL = process.env.REACT_APP_ARTICLE

export interface RequestOption {
    method: string,
    url: string
    payload?: any,
    endpoint?: string
}

export const requestWithToken = ({ endpoint = API_URL, ...request }: RequestOption) => {
    const headers = authHeader()
    console.log({ headers })

    if (headers) {
        switch (request.method) {
            case 'GET':
                return axios.get(`${endpoint}${request.url}`, {
                    headers: headers
                }).then((response: any) => {
                    if (response.status === 200) {
                        return response.data
                    }
                })

            case 'POST':
                return axios.post(`${endpoint}${request.url}`, {
                    ...request.payload
                }, {
                    headers: headers
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

export const requestWithFormDataInToken = ({ endpoint = API_URL, ...request }: RequestOption) => {

    const requestUrl = `${endpoint}${request.url}`
    const authToken = authHeader();

    switch (request.method) {
        case 'POST':
            let formData = new FormData();
            const keys = Object.keys(request.payload)
            for (const key of keys) {
                formData.append(key, request.payload[key])
            }
            return axios.post(requestUrl, formData, { headers: { "Content-Type": "multipart/form-data", ...authToken } }).then((res: any) => {
                if (res.status === 200) {
                    return res.data
                }
            })

        case 'GET':
            return axios.get(requestUrl, { headers: { "Content-Type": "multipart/form-data", ...authToken } }).then((res: any) => {
                if (res.status === 200) {
                    return res.data
                }

            })
    }


}
