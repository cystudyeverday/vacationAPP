import { createModel, init } from '@rematch/core'
import { fromJS } from 'immutable'
import { set as helpSet } from '../utils/reducers'
import type { RootModel } from '.'

export const account = createModel<RootModel>()({
    state: fromJS({
        form: {
            username: 'init',
            description: 'init',
            password: "***",

        }
    }),
    reducers: {

        set: (state: any, payload) => { return helpSet(state, payload) }


    },
    effects: (dispatch) => ({
    }),


})