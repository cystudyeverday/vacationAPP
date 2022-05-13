import { createModel, init } from '@rematch/core'
import { fromJS } from 'immutable'
import { set as helpSet } from '../utils/reducers'
import type { RootModel } from '.'
import { message } from 'antd'
import { Map } from 'immutable';
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
                    for (let file of files) {
                        if (file.originFileObj) {
                            formData.append('file', file.originFileObj)
                        } else {
                            const originFileObj = await fromUrlToBlob(file.url, file.name)
                            formData.append('file', originFileObj)

                        }

                    }
                } else if (key !== 'file') {
                    formData.append(key, payload[key])
                }
            }
            // upload or update depends on the current mode.
            try {
                const mode = rootState.post.get('mode')
                const api = mode === 'create' ? "http://8.130.19.187:8083/upload/uploadArticle" : "http://8.130.19.187:8083/modify/article"
                axios.post(api, formData, { headers: { "Content-Type": "multipart/form-data", ...authToken } }).then((res: any) => {
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
            } catch (err: any) {
                this.set(['loading', false])
                message.error(err)

            }

        }

    }),




})