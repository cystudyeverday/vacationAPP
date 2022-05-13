
import { Models } from '@rematch/core'
import { app } from './app'
import { login } from './login'
import { home } from './home'
import { account } from './account'
import { post } from './post'
import { myPost } from './mypost'




export interface RootModel extends Models<RootModel> {
    login: typeof login
    app: typeof app
    home: typeof home
    account: typeof account
    post: typeof post
    myPost: typeof myPost

}

export const models: RootModel = { login, app, home, account, post, myPost }