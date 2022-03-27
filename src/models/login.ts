import { createModel } from '@rematch/core'
import { fromJS } from 'immutable'
import { set as helpSet } from '../utils/reducers'
import type { RootModel } from '.'

export const login = createModel<RootModel>()({
    state: fromJS({
        user: {
            username: 'initname',
            passoword: ''
        }
    }),
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        // increment: (state, payload: number = 1) => state + payload,
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        set: (state: any, payload) => { return helpSet(state, payload) }


    },
    effects: (dispatch) => ({
        // async incrementAsync() {
        //     await delay(500)
        //     dispatch.dolphins.increment()
        // },
    }),


})