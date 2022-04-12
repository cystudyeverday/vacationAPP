import React, { useState } from 'react'
import { Form, Input, Button, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.css'
import { useModel } from '../../hooks/use-model';
import useHistory from '../../hooks/use-history'


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

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onFinish = (values: any) => {
        dispatch.postContent(values)
        console.log(values)
    };



    return (
        <div className="post-page">
            {'Post Content'}
            <Button onClick={onClickBack}>Back</Button>
            <div className="post-form">
                <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
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
                        <Upload
                            // action="../assets"
                            listType="picture-card"
                            fileList={uploaderState.fileList || []}
                            onPreview={handlePreview}
                            onChange={handleChange}
                            beforeUpload={beforeUploader}
                        >
                            {uploaderState.fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item name="label" label="加个标签" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>


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
        console.log(fileList)
    };

    function onClickBack() {

        gotoPage('/home')


    }
}

export default PostPage

