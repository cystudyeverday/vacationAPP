
import { Models } from '@rematch/core'
import { login } from './login'


export interface RootModel extends Models<RootModel> {
    login: typeof login

}

export const models: RootModel = { login }