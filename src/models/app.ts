import { createModel } from '@rematch/core'
import { fromJS } from 'immutable'
import { set as helpSet } from '../utils/reducers'
import type { RootModel } from '.'
import { State } from '../utils/types'

export const app = createModel<RootModel>()({
    state: fromJS({
        defaultSelectedKey: ['home']
    }),
    reducers: {
        set: (state: any, data) => helpSet(state, data)
    },

})