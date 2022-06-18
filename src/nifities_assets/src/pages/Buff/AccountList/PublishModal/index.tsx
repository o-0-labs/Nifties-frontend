/*
 * @Author: shenpeng 
 * @Date: 2022-06-16 22:53:23 
 * @Last Modified by: shenpeng
 * @Last Modified time: 2022-06-18 18:29:27
 */
import React, { useState } from "react"
import { Modal, Input, Button } from "antd"
import { observer, useLocalStore } from '../../store'
import GlobalStore from "store/GlobalStore"
const { TextArea } = Input

const PublishModal = () => {
    const root = useLocalStore()
    const { AccountListStore } = root

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        AccountListStore.publishContent = e.target.value.trim()
    }

    return <Modal title="" onCancel={() => AccountListStore.createVisible = false} getContainer={false} footer={null} visible={AccountListStore.createVisible} width={744}>
        <div className="fs-24 font-Urbanist fw-b tc text-[#000000]">Create Post</div>
        <div className="flex flex-row mt-[56px]">
            <img className="w-[48px] h-[48px] rounded-[24px]" src={GlobalStore.userInfo.profilePhoto} alt="profilePhoto" />
            <TextArea showCount maxLength={280} className="w-[624px] ml-20" rows={5} value={AccountListStore.publishContent} onChange={onChange} />
        </div>
        {/* <div className="flex flex-row ml-[68px]">
            <i className="iconfont icon-iconfontlayers1 primary_color fs-24" />
            <i className="iconfont icon-iconfontlayers1 primary_color fs-24 ml-12" />
            <i className="iconfont icon-iconfontlayers1 primary_color fs-24 ml-12" />
            <i className="iconfont icon-iconfontlayers1 primary_color fs-24 ml-12" />
            <i className="iconfont icon-iconfontlayers1 primary_color fs-24 ml-12" />
        </div> */}
        <div className="tc mt-60">
            <Button type="primary" ghost className="w-[174px]" onClick={() => { AccountListStore.createVisible = false; AccountListStore.publishContent = '' }}>Cancel</Button>
            <Button type="primary" className="w-[174px] ml-12" loading={AccountListStore.confirmLoading} onClick={AccountListStore.publishTwitter}>Publish</Button>
        </div>
    </Modal>
}

export default observer(PublishModal)