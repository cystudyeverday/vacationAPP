import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import NavBar from '../../components/NavBar'
import ContentList from '../../components/ContentList'
import ImgSlide from '../../components/ImgSlide'
import './index.css'

const { Header, Content, Footer } = Layout;

const navs = ['最热地点', '最热攻略', '我的收藏', '我的帖子', '我的账号']
const imgs = ["https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random",]
const Home = () => {
    return (
        <div className='home-page'>
            <NavBar>
                <ImgSlide imgLinks={imgs} />
                <ContentList />
            </NavBar>
            {/* <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        {
                            navs.map((nav) => {
                                return <Menu.Item key={nav}>{nav}</Menu.Item>
                            })
                        }

                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', height: '1000px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">Content</div>
                    {props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Created in 2022</Footer>
            </Layout>, */}
        </div>
    )
}

export default Home
