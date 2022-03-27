import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import NavBar from '../../components/NavBar'
import ContentList from '../../components/ContentList'
import './index.css'


const imgs = ["https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random",]
const HomePage = () => {
    return (
        <div className='home-page'>
            <NavBar>
                <ContentList />
            </NavBar>
        </div>
    )
}

export default HomePage
