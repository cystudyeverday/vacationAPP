import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import NavBar from '../../components/NavBar'
import ContentList from '../../components/ContentList'
import ImgSlide from '../../components/ImgSlide'
import './index.css'


const imgs = ["https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random",]
const Home = () => {
    return (
        <div className='home-page'>
            <NavBar>
                <ContentList />
            </NavBar>
        </div>
    )
}

export default Home
