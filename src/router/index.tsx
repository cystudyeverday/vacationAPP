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
const PlanPage = lazy(() => import('../page/plan'))
const AccountPage = lazy(() => import('../page/account'))
const PostPage = lazy(() => import('../page/post'))


const router: IRouter[] = [

    {
        path: '/home',
        title: 'Home',
        component: <Home />,
        key: "home"
    },
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
        key: "register"
    }, {
        path: '/plan',
        title: 'Plan',
        component: <PlanPage />,
        key: "plan"
    }, {
        path: '/account',
        title: 'Account',
        component: <AccountPage />,
        key: "account"
    }, {
        path: '/post',
        title: 'Post',
        component: <PostPage />,
        key: "post"
    },
    {
        path: '*',
        title: 'NoPage',
        component: <NoPage />,
        key: "noPage"
    },


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

