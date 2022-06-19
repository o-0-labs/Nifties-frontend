/*
 * @Author: shenpeng 
 * @Date: 2022-06-15 13:56:50 
 * @Last Modified by: shenpeng
 * @Last Modified time: 2022-06-19 21:43:28
 */
import React, { useEffect } from 'react'
import { Button } from 'antd'
import { useHistory, useLocation } from "react-router-dom"
import { observer, useLocalStore } from '../store'
import { parseQuery } from 'utils/Tools'
import PublishModal from './PublishModal'

const twitter = require('static/twitter.png')
const meta = require('static/meta.png')
const shopify = require('static/shopify.png')
const linkedIn = require('static/linkedIn.png')
const instagram = require('static/instagram.png')
const pinterest = require('static/pinterest.png')

const AccountList = () => {
    const history = useHistory()
    const root = useLocalStore()
    const location = useLocation()
    const { AccountListStore } = root
    const params = parseQuery(location.search)
    useEffect(() => {
        if (params.auth === 'true') {
            AccountListStore.createVisible = true
        } else {
            AccountListStore.createVisible = false
        }
    }, [])
    return <div className='account_list_wrap pt-[32px] px-[16px] mb-60 xl:max-w-screen-2xl xl:m-auto md:px-[32px] 2xl:px-[108px] xl:px-[68px] xl:pt-[65px]'>
        <Button type='default' className='back_btn' onClick={() => history.goBack()}><i className='iconfont icon-back_android fs-24 mr-[10px]' />Back</Button>
        <div className='flex flex-col justify-center items-center mt-[64px]'>
            <p className='fs-48 fw-b tc font-Poppinsc text-[#04091E]'>Get started with Publishing</p>
            <p className='fs-18 font-Urbanist tc text-gray-900 text-opacity-60 mt-12'>Connect a channel to plan, create and schedule content.</p>
            <p className='fs-18 font-Urbanist tc text-gray-900 text-opacity-60'>You can always add one later.</p>
            <div className='flex_wrap w-[808px] mt-32'>
                <div className="w-[245px] h-[276px] flex flex-col items-center rounded-lg shadow-lg mx-[12px]">
                    <img className="w-[72px] h-[72px] rounded-full mt-80" src={twitter} />
                    <p className="text-xl font-semibold leading-relaxed text-center text-gray-900">Twitter</p>
                    <p className="text-sm font-semibold leading-tight text-center text-[#00BCC2] csp" onClick={AccountListStore.onCreate}>Create</p>
                </div>
                <div className="w-[245px] h-[276px] flex flex-col items-center rounded-lg shadow-lg mx-[12px] opacity-50">
                    <img className="w-[72px] h-[72px] rounded-full mt-80" src={meta} />
                    <p className="text-xl font-semibold leading-relaxed text-center text-gray-900">Meta</p>
                    <p className="text-sm font-semibold leading-tight text-center text-[#747681]">Coming soon</p>
                </div>
                <div className="w-[245px] h-[276px] flex flex-col items-center rounded-lg shadow-lg mx-[12px] opacity-50">
                    <img className="w-[72px] h-[72px] rounded-full mt-80" src={instagram} />
                    <p className="text-xl font-semibold leading-relaxed text-center text-gray-900">Instagram</p>
                    <p className="text-sm font-semibold leading-tight text-center text-[#747681]">Coming soon</p>
                </div>
                <div className="w-[245px] h-[276px] flex flex-col items-center rounded-lg shadow-lg mx-[12px] opacity-50">
                    <img className="w-[72px] h-[72px] rounded-full mt-80" src={pinterest} />
                    <p className="text-xl font-semibold leading-relaxed text-center text-gray-900">Pinterest</p>
                    <p className="text-sm font-semibold leading-tight text-center text-[#747681]">Coming soon</p>
                </div>
                <div className="w-[245px] h-[276px] flex flex-col items-center rounded-lg shadow-lg mx-[12px] opacity-50">
                    <img className="w-[72px] h-[72px] rounded-full mt-80" src={linkedIn} />
                    <p className="text-xl font-semibold leading-relaxed text-center text-gray-900">LinkedIn</p>
                    <p className="text-sm font-semibold leading-tight text-center text-[#747681]">Coming soon</p>
                </div>
                <div className="w-[245px] h-[276px] flex flex-col items-center rounded-lg shadow-lg mx-[12px] opacity-50">
                    <img className="w-[72px] h-[72px] rounded-full mt-80" src={shopify} />
                    <p className="text-xl font-semibold leading-relaxed text-center text-gray-900">Shopify</p>
                    <p className="text-sm font-semibold leading-tight text-center text-[#747681]">Coming soon</p>
                </div>
            </div>
        </div>
        <PublishModal />
    </div>
}

export default observer(AccountList)