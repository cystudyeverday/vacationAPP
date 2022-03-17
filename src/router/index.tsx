import React, { ReactNode, lazy } from 'react'

import Login from '../page/login'
import Home from '../page/home'
import NoPage from '../page/noPage'
interface IRouter {
    title: string,
    path: string,
    key: string,
    component?: ReactNode,
    children?: IRouter,
}
// const Login = lazy(() => import('../page/login'))
// const Home = lazy(() => import('../page/home'))
// const NoPage = lazy(() => import('../page/noPage'))


const router: IRouter[] = [
    {
        path: '/login',
        title: 'Login',
        component: <Login />,
        key: "login"
    },
    {
        path: '/',
        title: 'Login',
        component: <Login />,
        key: "/"
    },
    {
        path: '/home',
        title: 'Home',
        component: <Home />,
        key: "home"
    },
    {
        path: '*',
        title: 'NoPage',
        component: <NoPage />,
        key: "noPage"
    }

]
export default router

