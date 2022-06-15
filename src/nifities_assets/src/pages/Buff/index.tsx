/*
 * @Author: shenpeng 
 * @Date: 2022-06-13 22:34:38 
 * @Last Modified by: shenpeng
 * @Last Modified time: 2022-06-14 23:02:42
 */
import React, { useState } from 'react'
import { Button, Timeline } from 'antd'
import { useHistory } from "react-router-dom"

const message = require('static/message.png')
const eye = require('static/eye.png')
const repeat = require('static/repeat.png')
const heart = require('static/heart.png')
const logout = require('static/logout.png')
const twitter = require('static/twitter.png')
const Buff = () => {
    const [active, setActive] = useState(1)
    const history = useHistory()
    const NFTContent = () => {
        return <div className='flex_wrap flex_c lg:justify-start lg:ml-4'>
            {[1, 2, 3, 4, 5].map(item => {
                return <div className='border border-bold rounded-lg overflow-hidden ml-[22px] mb-[42px] w-[310px]'>
                    <img className='w-[310px] h-[310px] object-cover block' src="https://formfunction.imgix.net/nft-images/itjmJk2HqHCiStEFk2ICE.png?q=80&auto=format&w=1000" alt="" />
                    <div className='px-[20px] py-[18px]'>
                        <p className='text-[20px] text-black'>Sellouts</p>
                        <p className='text-[12px]'>DistroKid</p>
                    </div>
                </div>
            })}
        </div>
    }
    const renderTimeline = () => {
        return <div className='ml-32 w-[24%]'>
            <Timeline mode='left'>
                <Timeline.Item label="2015-09-01">2 Tweets</Timeline.Item>
                <Timeline.Item label="">
                    <div className='px-[14px] py-[10px] hover:bg-[#D9D9D9] flex_sb'>
                        <img src="http://iph.href.lu/120x90" alt="" />
                        <div className='ml-16 flex flex-col justify-between h-[90px]'>
                            <div className='w-[442px]'>
                                <p className='fs-20 fw-b text-[#04091E]'>Chance to mint for free </p>
                                <p className='fs-14 text-[#898A8C]'>11:00:03·Twitter </p>
                            </div>
                            <div className='flex_sb'>
                                <div className='flex_1 flex_left text-[#00BCC2]'><img className="mr-[6px]" src={eye} alt="" />1.5w</div>
                                <div className='flex_1 flex_left text-[#00BCC2]'><img className="mr-[6px]" src={message} alt="" />199</div>
                                <div className='flex_1 flex_left text-[#00BCC2]'><img className="mr-[6px]" src={repeat} alt="" />199</div>
                                <div className='flex_1 flex_left text-[#00BCC2]'><img className="mr-[6px]" src={heart} alt="" />199</div>
                                <div className='flex_1 flex_left text-[#00BCC2]'><img className="mr-[6px]" src={logout} alt="" />199</div>
                            </div>
                        </div>
                    </div>
                </Timeline.Item>
            </Timeline>
        </div>
    }
    return <div className='pt-[32px] px-[16px] mb-60 xl:max-w-screen-2xl xl:m-auto md:px-[32px]  2xl:px-[108px] xl:px-[68px] xl:pt-[65px]'>
        <div className='flex flex-col items-center lg:flex-row lg:justify-between lg:items-start xl:items-center'>
            <div className="mt-[1rem] w-[460px] md:w-[567px] lg:w-[589px]">
                <p className="text-4xl text-center lg:text-left lg:text-5xl leading-normal lg:leading-normal font-semibold font-Poppins text-brand-text-black">
                    One-stop management of NFT projects
                </p>
                <p className="text-sm text-center lg:text-left mt-[20px] xl:font-medium font-Urbanist text-brand-text-gray">
                    Create NFTs, manage sns accounts and publish content  with one click.
                </p>
            </div>
            <img className="object-cover w-[460px] mt-[30px] md:w-[567px] md:h-[205px] xl:w-[567px] xl:h-[205px] md:ml-10 bg-[rgba(196,196,196,1)]" src='https://formfunction.imgix.net/nft-images/itjmJk2HqHCiStEFk2ICE.png?q=80&auto=format&w=1000' />
        </div>
        <div className='mt-32 lg:mt-[106px]'>
            <p className="text-3xl leading-10 text-gray-900 flex_sb">
                Explore Buff
                <Button type='primary' className='w-[174px] block lg:hidden'>Create NFTs</Button>
            </p>
            <div className='flex flex-col items-start justify-center lg:flex-row lg:justify-start mt-30'>
                <div className='w-[100%] flex flex-row lg:w-[306px]  lg:flex-col'>
                    <div className={`flex_left csp h-16 border-bold border rounded-lg px-[12px] lg:px-[16px] mb-16 fs-14 lg:fs-16 ${active === 1 ? 'bg-green-50 shadow-lg border-0' : ''}`} onClick={() => setActive(1)} >
                        <i className='iconfont icon-iconfontlayers1 mr-16 fs-24 hidden lg:block' />
                        NFT management
                    </div>
                    <div className={`flex_left csp h-16 border-bold border rounded-lg px-[12px] lg:px-[16px] mb-16 fs-14 lg:fs-16 ${active === 2 ? 'bg-green-50 shadow-lg border-0' : ''}`} onClick={() => setActive(2)}>
                        <i className='iconfont icon-credit-card mr-16 fs-24 hidden lg:block' />
                        Content management
                    </div>
                    <div className={`flex_left csp h-16 border-bold border rounded-lg px-[12px] lg:px-[16px] fs-14 lg:fs-16 ${active === 3 ? 'bg-green-50 shadow-lg border-0' : ''}`} onClick={() => setActive(3)}>
                        <i className='iconfont icon-user mr-16 fs-24 hidden lg:block' />
                        Account management
                    </div>
                    <div className='mt-50 hidden lg:flex lg:justify-center'>
                        <Button type='primary' className='w-[174px]' onClick={() => history.push('/addNFT')}>Create NFTs</Button>
                    </div>
                </div>
                <div className='flex_1'>
                    {active === 1 && NFTContent()}
                    {active === 2 && renderTimeline()}
                    {active === 3 && <div className='ml-32'>
                        <div className="w-[245px] h-[276px] flex flex-col items-center rounded-lg shadow-lg">
                            <img className="w-[72px] h-[72px] rounded-full mt-80" src={twitter} />
                            <p className="text-xl font-semibold leading-relaxed text-center text-gray-900">Twitter</p>
                            <p className="text-sm font-semibold leading-tight text-center text-gray-500">Disconnect</p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>

    </div>
}

export default Buff