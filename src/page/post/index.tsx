import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Upload, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.css'
import { useModel } from '../../hooks/use-model';
import useHistory from '../../hooks/use-history'
import LabelItem from './components/LabelItem'
import MyLabelItem from './components/MyLabelItem';
import ImageUploader from './components/ImageUploader'
import { useForm } from 'antd/lib/form/Form';
import { fromJS, Map } from 'immutable'


const PostPage = () => {

    const [uploaderState, setUploaderState] = useState({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [

        ],
    })
    const { state, dispatch } = useModel('post')
    const { gotoPage } = useHistory()
    const currentPage = state.get('currentPage')
    const mode = state.get('mode')
    const formData = state.get('form', Map()).toJS()
    const [form] = useForm()
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const validateMessages = {
        required: '这里还没写呢',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };


    const onFinish = (values: any) => {
        dispatch.postContent(values)
    };

    useEffect(() => {
        form.setFieldsValue(formData)
        console.log(formData)
    }, [])

    useEffect(() => {
        if (currentPage === 'home') {
            dispatch.set(['currentPage', 'post'])
            gotoPage('/home')
        }
    }, [currentPage])



    return (
        <div className="post-page">
            {'Post Content'}
            <Button onClick={onClickBack}>Back</Button>
            <Spin spinning={state.get('loading')}>
                <div className="post-form">
                    <Form name="nest-messages"
                        onFinish={onFinish}
                        validateMessages={validateMessages}
                        form={form}
                        onValuesChange={onFormValuesChange}
                        layout="vertical">
                        <Form.Item name="title" label="帖子叫啥" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="brief" label="一句话概括" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={"article"} label="帖子内容" rules={[{ required: true }]}>
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item name="file" label="加点图片" getValueFromEvent={normFile}>
                            <ImageUploader />
                        </Form.Item>
                        <Form.Item name="label" label="加个标签" >
                            <MyLabelItem />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Spin >
        </div >


    )

    function getBase64(file: any) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    function beforeUploader({ fileList }: any) {
        //avoid auto uploading
        return false

    }


    function normFile(e: any) {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };


    async function handlePreview(file: any) {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setUploaderState({
            ...uploaderState,
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    function handleChange({ fileList }: any) {
        setUploaderState({ ...uploaderState, fileList })

    };

    function onClickBack() {
        gotoPage('/home')
    }

    //change values reflect to the form state
    function onFormValuesChange(changedValues: any, allValues: any) {
        console.log(changedValues)
        console.log(allValues)
        const keys = Object.keys(changedValues)
        for (const k of keys) {
            dispatch.set({
                path: ['form', k],
                value: fromJS(changedValues[k])
            })

        }



    };
}

export default PostPage

