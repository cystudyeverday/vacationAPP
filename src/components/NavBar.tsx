import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const navs = ['最热地点', '最热攻略', '我的收藏', '我的帖子', '我的账号']

const NavBar = (props: any) => {
    return (
        <div className='home-page'>
            <Layout className="layout">
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
            </Layout>,
        </div>
    )
}

export default NavBar
