import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import { Menu, Button, Avatar, Form, Input, Modal } from 'antd';
import './index.css'
import { useModel } from '../../hooks/use-model';
import EditInfoPopUp from './EditInfoPopUp'
import AccountActiveChart from './AccountActiveChart'
interface Props {
    avatar?: string,
    description?: string,
    name?: string
}


const AccountPage = (props: Props) => {
    const { state, dispatch } = useModel('account')
    const formValues = state.get('form').toJS()
    const [form] = Form.useForm();
    const [editInfoPop, setEditInfoPop] = useState(false)
    // useEffect(() => {
    //     form.setFieldsValue(formValues)
    //     console.log(formValues)
    // }, [])

    return (
        <NavBar>
            <div className="account-page">
                <div className="account-top-bar">
                    <Avatar
                        size={100}
                        src="https://joeschmoe.io/api/v1/random"
                        style={{ backgroundColor: 'white' }}
                    />
                    <div className="account-text">
                        <div className="account-name">
                            {props.name || "徐霞客徒弟"}
                        </div>
                        <div className="account-des" onClick={() => {
                            setEditInfoPop(true)
                        }}>
                            {props.description || "一个普通的旅游家"}
                        </div>
                    </div>
                    <EditInfoPopUp
                        initValues={formValues}
                        onValuesChange={onValuesChange}
                        visible={editInfoPop}
                        setVisible={setEditInfoPop}
                    />
                </div>

                <div className="account-content">
                    {/* {renderForm()} */}
                    <AccountActiveChart />
                </div>
            </div>
        </NavBar>
    )

    function renderForm() {
        return (
            <Form
                name="account"
                labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}
                onValuesChange={onValuesChange}
                initialValues={formValues}
                form={form}


            // fields={fields}
            // onFieldsChange={(_, allFields) => {
            //     onChange(allFields);
            // }}
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true, message: 'Username is required!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Description"
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
            <Modal>
                {renderForm()}
            </Modal>
        )
    }

    function onValuesChange(changeValues: any, allValues: any) {
        console.log(changeValues)
        console.log(allValues)
        const keys = Object.keys(changeValues)
        for (const key of keys) {
            dispatch.set({ path: ['form', key], value: changeValues[key] })
        }

    }


}

export default AccountPage
