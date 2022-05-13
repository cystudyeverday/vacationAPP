import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar'
import ContentList from '../../components/ContentList'
import './index.css'
import { useModel } from '../../hooks/use-model';
import { List } from 'immutable'

const MyPostPage = () => {
    const { state, dispatch } = useModel('myPost')
    const listData = state.get('articles', List()).toJS()
    console.log(listData)
    useEffect(() => {
        dispatch.getArticles()
    }, [])

    return (
        <NavBar>
            <div className='my-post-page'>
                <ContentList content={listData} loading={state.get('loading')} edit={true} />
            </div>
        </NavBar>
    )
    //--------------------------------------------------------------------------------------------------

}

export default MyPostPage
