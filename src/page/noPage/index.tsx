import React from 'react'
import { useModel } from '../../hooks/use-model'
import { Button } from 'antd'
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
