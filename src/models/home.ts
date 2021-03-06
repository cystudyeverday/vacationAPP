import { createModel } from '@rematch/core'
import { fromJS } from 'immutable'
import { set as helpSet } from '../utils/reducers'
import type { RootModel } from '.'
import { requestWithToken } from '../utils/request'
import { message } from 'antd'


const ARTICLE_URL = process.env.REACT_APP_ARTICLE

export const home = createModel<RootModel>()({
    state: fromJS({
        articles: [],
        loading: false,
    }),
    reducers: {
        set: (state: any, payload) => { return helpSet(state, payload) }
    },
    effects: (dispatch) => ({

        async getArticles() {
            this.set(['loading', true])
            const requestOption = {
                url: '/view/myArticle',
                method: 'POST',
                endpoint: "http://8.130.19.187:8083"
            }
            try {
                const { success, errorMessage, data } = await requestWithToken(requestOption)
                if (success) {
                    this.set(['articles', fromJS(data)])
                } else {
                    message.error(errorMessage)
                }
                this.set(['loading', false])
            } catch (err: any) {
                message.error("Error in Network")
                this.set(['loading', false])


            }

        },
    }),


})