/*
 * @Author: shenpeng 
 * @Date: 2022-06-14 23:05:22 
 * @Last Modified by: shenpeng
 * @Last Modified time: 2022-06-18 18:14:23
 */
import React, { useState } from 'react'
import { Form, Input, Button, Upload, message, Select } from 'antd'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import type { UploadChangeParam } from 'antd/es/upload';
import { LoadingOutlined } from '@ant-design/icons';
import { useLocalStore } from '../store'
import { getToken } from 'utils/Auth';
import { useHistory } from 'react-router-dom'
import './index.scss'

const uploadImg = require('static/image.png')
const { TextArea } = Input;
const { Option } = Select;

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const AddNFT = () => {
    const history = useHistory()
    const root = useLocalStore()
    const { NFTStore } = root
    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(true);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as RcFile, url => {
                setLoading(false);
                setDisable(false)
                setImageUrl(url);
            });
        }
        if (info.file.status === 'error') {
            message.error('upload file')
            setLoading(false);
            setDisable(true)
        }
    };

    const onSubmit = async (values: any) => {
        setConfirmLoading(true)
        const res = await NFTStore.onSubmit(values)
        setConfirmLoading(false)
        if (res.Ok.id) {
            message.success('create success')
            setTimeout(() => {
                history.goBack()
            }, 1500)
            return
        }
        message.error('create fail')
    }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <img src={uploadImg} />}
        </div>
    );

    return <div className='w-[720px] pt-[120px] pl-[160px] addNFT_wrap'>
        <div className="w-[572px]">
            <p className="text-5xl font-semibold leading-10 text-gray-900">Create single item</p>
            <p className="text-lg font-medium leading-loose text-gray-900 text-opacity-60 mt-20">Image, Video, Audio, or 3D Model. File types supported: JPG, PNG, GIF,SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
        </div>
        <div className='mt-32'>
            <Form
                layout="vertical"
                colon={false}
                onFinish={onSubmit}
            >
                <Form.Item
                    label="Upload File"
                    name="image"
                    required
                >
                    <Upload
                        name="upload"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action={`${process.env.API_HOST}/img/upload`}
                        headers={{ Authorization: `Bearer ${getToken()}` }}
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="itemName"
                    required
                >
                    <Input className='add_input' placeholder='Item Name' />
                </Form.Item>
                <Form.Item
                    label="External Link"
                    name="link"
                >
                    <Input className='add_input' placeholder='https://www.youtube.com/watch?v=Oz9zw7-_vhM' />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                >
                    <TextArea className='add_textarea' placeholder='Provide a detailed description of your item.' />
                </Form.Item>
                <Form.Item>
                    <Button className='w-[174px]' type="primary" htmlType="submit" disabled={disable} loading={confirmLoading}>
                        Confirm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div >
}

export default AddNFT