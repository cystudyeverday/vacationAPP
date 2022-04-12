import { createModel, init } from '@rematch/core'
import { fromJS } from 'immutable'
import { set as helpSet } from '../utils/reducers'
import type { RootModel } from '.'
import { message } from 'antd'
import { requestWithToken } from '../utils/request'
import axios from 'axios';
import { authHeader } from "../api/helps";



export const post = createModel<RootModel>()({
    state: fromJS({
        form: {
            title: "",
            brief: "",
            article: "",
            file: [],
            label: ""
        }
    }),
    reducers: {

        set: (state: any, payload) => { return helpSet(state, payload) }


    },
    effects: (dispatch) => ({
        // async postContent(payload) {
        //     const requestOption = {
        //         url: '/upload/uploadArticle',
        //         method: 'POST',
        //         endpoint: "http://8.130.19.187:8083",
        //         payload

        //     }
        //     const { success, errorMessage } = await requestWithToken(requestOption)
        //     if (success) {
        //         // this.set(['articles', fromJS(data)])
        //         message.success("uploaded sucess")
        //     } else {
        //         message.error(errorMessage)
        //     }

        // },

        async postContent(payload) {

            let formData = new FormData();
            const authToken = authHeader();
            const keys = Object.keys(payload)
            for (const key of keys) {
                if (key === 'file' && payload[key] !== undefined) {
                    console.log(payload)
                    const files = payload.file
                    files.map((file: any) => {
                        formData.append('file', file.originFileObj)

                    })

                } else if (key !== 'file') {
                    formData.append(key, payload[key])
                }
            }
            console.log(formData.getAll('file'))
            axios.post("http://8.130.19.187:8083/upload/uploadArticle", formData, { headers: { "Content-Type": "multipart/form-data", ...authToken } }).then((res: any) => {
                console.log(res)
                if (res.data.success) {
                    // this.set(['articles', fromJS(data)]
                    message.success("uploaded sucess")
                } else {
                    message.error(res.data.errorMessage)
                }

            })





        }


    }),




})