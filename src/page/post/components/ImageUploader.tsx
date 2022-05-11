import React, { useState, useEffect } from 'react'
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

    useEffect(() => {
        console.log(props.value)
        if (props.value) {
            // props.value.map(v => {
            //     fetch(v.url)
            //         .then(res => res.blob()) // Gets the response and returns it as a blob
            //         .then(blob => {
            //             return new File([blob], v.name, { type: "image/png" })
            //         }).then(file => {
            //             console.log(file)
            //             const newobj = { ...v, originFileObj: file }
            //             const fileListTemp = fileList.slice(0)
            //             fileListTemp.push(newobj)
            //             setFileList(fileListTemp)

            //         });
            // })

            console.log(props.value)
            setFileList(props.value)

        }
    }, [props.value])


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
        console.log("fileList")
        console.log(fileList)
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
        //console.log(fileList)
        return false

    }

    //---------------------------------------------------------------------------------------------------------------
    function fromUrlToBlob(url: string, filename: string) {
        fetch(url)
            .then(res => res.blob()) // Gets the response and returns it as a blob
            .then(blob => {
                return new File([blob], filename, { type: "image/png" })
            });

    }

}

export default ImageUploader
