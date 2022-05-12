import { createModel, init } from '@rematch/core'
import { fromJS } from 'immutable'
import { set as helpSet } from '../utils/reducers'
import type { RootModel } from '.'
import { message } from 'antd'
import { requestWithToken } from '../utils/request'
import { Map, List } from 'immutable';
import axios from 'axios';
import { authHeader } from "../api/helps";
import { fromUrlToBlob } from './helper'


export const post = createModel<RootModel>()({
    state: fromJS({
        form: {
            title: "测试",
            brief: "看下",
            article: "test",
            file: [{
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-2',
                name: 'image2.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },],
            label: "1,2,33"
        },
        loading: false,
        currentPage: 'post',
        mode: 'create'

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

        async postContent(_, rootState: any) {
            this.set(['loading', true])
            const payload: any = rootState['post'].get('form', Map()).toJS()

            let formData = new FormData();
            const authToken = authHeader();
            const keys = Object.keys(payload)
            for (const key of keys) {
                if (key === 'file' && payload[key] !== undefined) {
                    console.log(payload)
                    const files = payload.file
                    // files.map(async (file: any) => {
                    //     if (file.originFileObj) {
                    //         console.log('haveorigin')
                    //         console.log(file.originFileObj)
                    //         formData.append('file', file.originFileObj)
                    //     }
                    //     else {
                    //         console.log('dont have origin')
                    //         const originFileObj = await fromUrlToBlob(file.url, file.name)
                    //         console.log(originFileObj)
                    //         formData.append('file', originFileObj)

                    //     }
                    // })
                    for (let file of files) {
                        if (file.originFileObj) {
                            console.log('haveorigin')
                            console.log(file.originFileObj)
                            formData.append('file', file.originFileObj)
                        } else {
                            console.log('dont have origin')
                            const originFileObj = await fromUrlToBlob(file.url, file.name)
                            console.log(originFileObj)
                            formData.append('file', originFileObj)

                        }

                    }
                } else if (key !== 'file') {
                    formData.append(key, payload[key])
                }
            }

            axios.post("http://8.130.19.187:8083/upload/uploadArticle", formData, { headers: { "Content-Type": "multipart/form-data", ...authToken } }).then((res: any) => {
                if (res.data.success) {
                    // this.set(['articles', fromJS(data)]
                    message.success("uploaded sucess")
                    this.set(['loading', false])
                    this.set(['currentPage', 'home'])
                } else {
                    message.error(res.data.errorMessage)
                    this.set(['loading', false])
                }

            })

        }

    }),




})