import React, { useState, useRef } from 'react'
import { Form, Input, Button, message as AntMessage } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css'
import useHistory from '../../hooks/use-history'
import login from '../../api/login'

const Register = () => {
    const formRef = useRef<any>();
    const { gotoPage } = useHistory();
    return (
        < div className='register-page' >
            <div className="inner-div">
                <Form
                    name="registerForm"
                    className="login-form"
                    initialValues={{ remember: true }}
                    ref={formRef}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your phone or email' }]}
                    >
                        <div>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="电话或邮箱" />
                            <Button onClick={handleVCode}>发送验证码</Button>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[{ required: true, message: 'Please input your verification code.' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="验证码"
                        />

                    </Form.Item>


                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>

                    </Form.Item>
                </Form>
            </div>
        </div >
    )

    async function handleVCode() {
        const email = formRef.current?.getFieldValue('email');
        const { success, errorMessage } = await login.getCode(email, 'email')
        if (success) {
            AntMessage.success('验证码已发送到邮箱')

        } else {
            AntMessage.error(errorMessage)

        }

    }

    async function onFinish(values: any) {
        console.log(values)
        const { success, errorMessage, data } = await login.login(values, 'email')
        if (success) {
            localStorage.setItem("user", JSON.stringify(data))
            AntMessage.success('success')
            gotoPage('/home')
        }
        else {
            AntMessage.error(errorMessage)
        }

    }
}

export default Register
