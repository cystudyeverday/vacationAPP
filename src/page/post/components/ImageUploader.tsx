import React, { useState } from 'react'
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface Props {
    value?: any[],
    onChange?: (value: any) => void
}

const ImageUploader = (props: Props) => {

    const [fileList, setFileList] = useState(props.value || [])
    const [previewVisible, setPreviewVisible] = useState(false)
    const [previewTitle, setPreviewTitle] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    return (
        <div className='image-uploader'>
            <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={beforeUploader}

            >
                {fileList.length >= 8 ? null : <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                </div>}
            </Upload>

            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>


        </div>
    )

    //---------------------------------------------------------------------------------------------------------------
    async function handlePreview(file: any) {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    };

    //---------------------------------------------------------------------------------------------------------------
    function handleChange({ fileList }: any) {
        setFileList(fileList)
        props.onChange?.(fileList)
    }

    //---------------------------------------------------------------------------------------------------------------
    function handleCancel() {
        setPreviewVisible(false)
    }

    //---------------------------------------------------------------------------------------------------------------
    function getBase64(file: any) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    //---------------------------------------------------------------------------------------------------------------
    function beforeUploader({ fileList }: any) {
        //avoid auto uploading
        return false

    }
}



export default ImageUploader
