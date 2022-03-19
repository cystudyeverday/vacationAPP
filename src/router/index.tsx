import React, { ReactNode, lazy } from 'react'

// import Login from '../page/login'
// import Home from '../page/home'
// import NoPage from '../page/noPage'
// import Register from '../page/noPage'
interface IRouter {
    title: string,
    path: string,
    key: string,
    component?: ReactNode,
    children?: IRouter,
}
const Login = lazy(() => import('../page/login'))
const Home = lazy(() => import('../page/home'))
const NoPage = lazy(() => import('../page/noPage'))
const Register = lazy(() => import('../page/register'))


const router: IRouter[] = [

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
    }, {
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
    }, {
        path: '/register',
        title: 'Register',
        component: <Register />,
        key: "/"
    }

]

export const unAuthRouter: IRouter[] = [
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
    }, {
        path: '/register',
        title: 'Register',
        component: <Register />,
        key: "/"
    }

]
export default router

