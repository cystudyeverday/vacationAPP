
import { Models } from '@rematch/core'
import { app } from './app'
import { login } from './login'



export interface RootModel extends Models<RootModel> {
    login: typeof login
    app: typeof app

}

export const models: RootModel = { login, app }