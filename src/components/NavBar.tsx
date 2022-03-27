import React from 'react'
import { Layout, Menu } from 'antd';
import './index.css'
import { useModel } from '../hooks/use-model';
import useHistory from '../hooks/use-history';
const { Header, Content, Footer } = Layout;


const NavBar = (props: any) => {


    const navs = ['最热地点', '最热攻略', '我的收藏', '我的帖子', '我的账号']
    const links = ['home', 'plan', 'collections', 'post', 'account']

    const { state, dispatch } = useModel('app')
    const { gotoPage } = useHistory()

    return (
        <div className='page-layout'>
            <Layout className="layout">
                <Header className="nav-bar" style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={state.get('defaultSelectedKey')}>
                        {
                            navs.map((nav, index) => {
                                return <Menu.Item key={links[index]} onClick={onClickMenu}>{nav}</Menu.Item>
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

    function onClickMenu({ key }: { key: string }) {
        gotoPage(`/${key}`)
        dispatch.set(['defaultSelectedKey', [key]])


    }
}

export default NavBar