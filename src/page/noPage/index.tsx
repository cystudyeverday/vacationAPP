import React from 'react'
import { useModel } from '../../hooks/use-model'
import { RootState, Dispatch } from '../../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { fromJS } from 'immutable'


const NoPage = () => {

    const { state, dispatch } = useModel('login')


    // const state = useSelector((state: RootState) => state.login)
    // const dispatch = useDispatch<Dispatch>().login

    return (
        <div>
            {state.getIn(['user', 'username'])}
            NoPage
            <Button onClick={() => dispatch.set({
                path: ['user', 'username'],
                value: "username"
            })}>button</Button>
        </div>
    )
}

export default NoPage
