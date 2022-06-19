/*
 * @Author: shenpeng 
 * @Date: 2022-06-13 22:34:38 
 * @Last Modified by: shenpeng
 * @Last Modified time: 2022-06-19 23:12:06
 */
import React, { useEffect, useState } from 'react'
import { Button, Timeline, Spin } from 'antd'
import { useHistory } from "react-router-dom"
import { observer, useLocalStore } from './store'
import { Provider } from 'mobx-react'
import NFEmpty from 'components/NFEmpty'
import dayjs from 'dayjs'


const message = require('static/message.png')
const eye = require('static/eye.png')
const repeat = require('static/repeat.png')
const heart = require('static/heart.png')
const logout = require('static/logout.png')
const twitter = require('static/twitter.png')
const banner = require('static/buff_banner.png')
const defaultIcon = require('static/default_icon.png')

const Buff = observer(() => {
    const [active, setActive] = useState(1)
    const history = useHistory()
    const root = useLocalStore()
    const { AccountListStore, NFTStore } = root

    useEffect(() => {
        if (active === 1) {
            NFTStore.getNftList()
        }
        if (active === 2) {
            AccountListStore.getTwitterList()
        }
    }, [active])

    const changeTab = (val: number) => {
        setActive(val)
    }

    const NFTContent = () => {
        if (NFTStore.nftList.length) {
            return <div className='flex_wrap flex_c lg:justify-start lg:ml-4'>
                {NFTStore.nftList.map(item => {
                    return <div key={item.tokenId} className='border border-bold rounded-lg overflow-hidden ml-[22px] mb-[22px] w-[310px]'>
                        <img className='w-[310px] h-[310px] object-cover block' src={item.url} alt="" />
                        <div className='px-[20px] py-[18px]'>
                            <p className='text-[20px] text-black'>{item.name}</p>
                            {/* <p className='text-[12px]'>DistroKid</p> */}
                        </div>
                    </div>
                })}
            </div>
        }
        return <NFEmpty />
    }
    const renderTimeline = () => {
        if (AccountListStore.twitterList.length) {
            return <div className='ml-32 w-[24%]'>
                <Timeline mode='left'>
                    <Timeline.Item label={dayjs(AccountListStore.twitterList[0].created_at).format('YYYY-MM-DD')}>{AccountListStore.total} Tweets</Timeline.Item>
                    {
                        AccountListStore.twitterList.map(item => {
                            return <Timeline.Item label="">
                                <div className='px-[14px] py-[10px] hover:bg-[#D9D9D9] flex_sb items-start' key={item.id}>
                                    <img className='w-[48px] h-[48px] rounded-[24px]' src={AccountListStore.photoUrl || defaultIcon} alt="" />
                                    <div className='ml-16 flex flex-col justify-between h-[90px]'>
                                        <div className='w-[442px]'>
                                            <p className='fs-20 fw-b text-[#04091E]'>{item.text} </p>
                                            <p className='fs-14 text-[#898A8C]'>{dayjs(item.created_at).format('MM-DD HH:mm')}</p>
                                        </div>
                                        <div className='flex_sb'>
                                            <div className='flex_1 flex_left text-[#00BCC2]'><img className="mr-[6px]" src={eye} alt="" />{item.public_metrics.retweet_count || 0}</div>
                                            <div className='flex_1 flex_left text-[#00BCC2]'><img className="mr-[6px]" src={message} alt="" />{item.public_metrics.reply_count || 0}</div>
                                            <div className='flex_1 flex_left text-[#00BCC2]'><img className="mr-[6px]" src={repeat} alt="" />{item.public_metrics.quote_count || 0}</div>
                                            <div className='flex_1 flex_left text-[#00BCC2]'><img className="mr-[6px]" src={heart} alt="" />{item.public_metrics.like_count || 0}</div>
                                            {/* <div className='flex_1 flex_left text-[#00BCC2]'><img className="mr-[6px]" src={logout} alt="" />199</div> */}
                                        </div>
                                    </div>
                                </div>
                            </Timeline.Item>
                        })
                    }
                </Timeline>
            </div>
        }
        return <NFEmpty />
    }
    return <Spin spinning={AccountListStore.loading || NFTStore.loading} delay={300}>
        <div className='pt-[32px] px-[16px] mb-60 xl:max-w-screen-2xl xl:m-auto md:px-[32px] 2xl:px-[108px] xl:px-[68px] xl:pt-[65px]'>
            <div className='flex flex-col items-center lg:flex-row lg:justify-between lg:items-start xl:items-center'>
                <div className="mt-[1rem] w-[460px] md:w-[567px] lg:w-[589px]">
                    <p className="text-4xl text-center lg:text-left lg:text-5xl leading-normal lg:leading-normal font-semibold font-Poppins text-brand-text-black">
                        One-stop management of NFT projects
                    </p>
                    <p className="text-sm text-center lg:text-left mt-[20px] xl:font-medium font-Urbanist text-brand-text-gray">
                        Create NFTs, manage sns accounts and publish content  with one click.
                    </p>
                </div>
                <img className="object-cover w-[460px] mt-[30px] md:w-[567px] md:h-[205px] xl:w-[567px] xl:h-[205px] md:ml-10" src={banner} />
            </div>
            <div className='mt-32 lg:mt-[106px]'>
                <p className="text-3xl leading-10 text-gray-900 flex_sb">
                    Explore Buff
                    {active !== 3 && <Button type='primary' className='w-[174px] block lg:hidden' onClick={() => { active === 1 ? history.push('/addNFT') : history.push('/accountList') }}>{active === 1 ? "Create NFTs" : active === 2 ? 'Create Post' : 'Add Account'}</Button>}
                </p>
                <div className='flex flex-col items-start justify-center lg:flex-row lg:justify-start mt-30'>
                    <div className='w-[100%] flex flex-row lg:w-[306px]  lg:flex-col'>
                        <div className={`flex_left csp h-16 border-bold border rounded-lg px-[12px] lg:px-[16px] mb-16 fs-14 lg:fs-16 ${active === 1 ? 'bg-green-50 shadow-lg border-0 border-none' : ''}`} onClick={() => changeTab(1)} >
                            <i className='iconfont icon-iconfontlayers1 mr-16 fs-24 hidden lg:block' />
                            NFT management
                        </div>
                        <div className={`flex_left csp h-16 border-bold border rounded-lg px-[12px] lg:px-[16px] mb-16 fs-14 lg:fs-16 ${active === 2 ? 'bg-green-50 shadow-lg border-0 border-none' : ''}`} onClick={() => changeTab(2)}>
                            <i className='iconfont icon-credit-card mr-16 fs-24 hidden lg:block' />
                            Content management
                        </div>
                        <div className={`flex_left csp h-16 border-bold border rounded-lg px-[12px] lg:px-[16px] fs-14 lg:fs-16 ${active === 3 ? 'bg-green-50 shadow-lg border-0 border-none' : ''}`} onClick={() => changeTab(3)}>
                            <i className='iconfont icon-user mr-16 fs-24 hidden lg:block' />
                            Account management
                        </div>
                        <div className='mt-50 hidden lg:flex lg:justify-center'>
                            {active !== 3 && <Button type='primary' className='w-[174px]' onClick={() => { active === 1 ? history.push('/addNFT') : history.push('/accountList') }}>{active === 1 ? "Create NFTs" : active === 2 ? 'Create Post' : 'Add Account'}</Button>}
                        </div>
                    </div>
                    <div className='flex_1'>
                        {active === 1 && NFTContent()}
                        {active === 2 && renderTimeline()}
                        {active === 3 && AccountListStore.authFlag && <div className='ml-32'>
                            <div className="w-[245px] h-[276px] flex flex-col items-center rounded-lg shadow-lg">
                                <img className="w-[72px] h-[72px] rounded-full mt-80" src={twitter} />
                                <p className="text-xl font-semibold leading-relaxed text-center text-gray-900">Twitter</p>
                                <p className="text-sm font-semibold leading-tight text-center text-gray-500" onClick={() => AccountListStore.removeTwitter()}>Disconnect</p>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </Spin >
})

const _Buff = (props: any) => {
    return <Provider>
        <Buff {...props} />
    </Provider>
}
export default observer(_Buff)