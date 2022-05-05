import React from 'react'
import { Menu, Button, Avatar, Form, Input, Modal } from 'antd';

interface Props {
    initValues: any
    visible: boolean,
    setVisible: (visible: boolean) => void
    onValuesChange?: (changeValues: any, allValues: any) => void,

}
const EditInfoPopUp = (props: Props) => {
    const [form] = Form.useForm();
    return (
        <div className='edit-info-popup'>
            {renderModal()}
        </div>
    )

    function renderForm() {
        return (
            <Form
                name="account"
                labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}
                onValuesChange={onValuesChange}
                initialValues={props.initValues}
                form={form}
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true, message: 'Username is required!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Username is required!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Username is required!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        )
    }

    function renderModal() {
        return (
            <Modal
                visible={props.visible}
                centered
                width={500}
                closable={true}
                onCancel={onCancel}
            >

                {renderForm()}
            </Modal>
        )
    }

    function onValuesChange(changeValues: any, allValues: any) {
        props.onValuesChange?.(changeValues, allValues)

    }

    function onCancel(e: any) {
        props.setVisible(false)
    }
}

export default EditInfoPopUp
