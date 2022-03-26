import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './index.css'
const { Header, Content, Footer } = Layout;

const navs = ['最热地点', '最热攻略', '我的收藏', '我的帖子', '我的账号']

const NavBar = (props: any) => {
    return (
        <div className='page-layout'>
            <Layout className="layout">
                <Header className="nav-bar" style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]}>
                        {
                            navs.map((nav) => {
                                return <Menu.Item key={nav}>{nav}</Menu.Item>
                            })
                        }

                    </Menu>
                </Header>
                <Content >
                    <div className="site-layout-content">
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Created in 2022</Footer>
            </Layout>,
        </div>
    )
}

export default NavBar
