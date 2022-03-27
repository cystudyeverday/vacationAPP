import React from 'react'
import { useModel } from '../../hooks/use-model'
import { RootState, Dispatch } from '../../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { fromJS } from 'immutable'
import NavBar from '../../components/NavBar'



const NoPage = () => {

    const { state, dispatch } = useModel('login')


    return (
        <div>
            <NavBar>

                {state.getIn(['user', 'username'])}
                NoPage
                <Button onClick={() => dispatch.set({
                    path: ['user', 'username'],
                    value: "username"
                })}>button</Button>
            </NavBar>
        </div>
    )
}

export default NoPage
