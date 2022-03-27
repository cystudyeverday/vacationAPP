import { createModel } from '@rematch/core'
import { fromJS } from 'immutable'
import { set as helpSet } from '../utils/reducers'
import type { RootModel } from '.'

export const app = createModel<RootModel>()({
    state: fromJS({
        defaultSelectedKey: ['home']
    }),
    reducers: {
        set: (state: any, payload) => { return helpSet(state, payload) }
    },

})