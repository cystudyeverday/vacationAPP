
import { Models } from '@rematch/core'
import { app } from './app'
import { login } from './login'
import { home } from './home'



export interface RootModel extends Models<RootModel> {
    login: typeof login
    app: typeof app
    home: typeof home

}

export const models: RootModel = { login, app, home }