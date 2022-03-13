import React, { useState, useRef } from 'react'
import { Form, Input, Button, Checkbox, message as AntMessage } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import login from '../../api/login'

import './index.css'

const Login = () => {
    const formRef = useRef<any>()
    return (
        <div className='login-page'>
            <div className="inner-div">
                <Form
                    name="loginForm"
                    className="login-form"
                    initialValues={{ remember: true }}
                    ref={formRef}
                    onFinish={onFinish}

                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            忘记密码
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            账号密码登录
                        </Button>
                        <p style={{ marginTop: '20px' }}>
                            <a href="">用手机或邮箱注册后直接登录</a>
                        </p>
                    </Form.Item>
                </Form>
            </div>
        </div >
    )

    async function onFinish() {
        const { success, errorMessage, data } = await login.login(formRef.current?.getFieldValue('username'), formRef.current?.getFieldValue('password'))
        if (success) {
            localStorage.setItem("user", JSON.stringify(data.data))
            AntMessage.success('success')

        }
        else {
            AntMessage.error(errorMessage)
        }
    }

}

export default Login
