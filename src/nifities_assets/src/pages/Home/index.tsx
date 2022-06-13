import React from 'react';
import { useHistory } from "react-router-dom"
import { Button } from 'antd'
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import './index.scss'

const nft = require('static/nft.png')
const Home = () => {
    const history = useHistory()

    return (
        <div className='home_wrap'>
            <div className='header_wrap'>
                <Header />
                <div className='sloga_wrap'>
                    <h2 className='sloga'>Explore, Collect, and
                        Manege NFTs</h2>
                    <h3 className='sub_title'>On the world's Best NFT incubator</h3>
                </div>
                <img className='bg_text' src={nft} alt="nft" />
                <div className='float_block_wrap flex_sb'>
                    <div className='float_block_left flex_left'>
                        <div className='block_list'>
                            <div className='block_item'>
                                <div className='title flex_c'>
                                    <span className='title_text'>Bounties</span>
                                </div>
                                <div className='descript'>Design resources
                                    at  your finger tips</div>
                                <div className='tips mt-25'>Coming soon</div>
                            </div>
                            <div className='block_item mt-50 border_left_0'>
                                <div className='title flex_c'>
                                    <span className='title_text'>Grants</span>
                                </div>
                                <div className='descript'>Crowdfunding
                                    for open resources</div>
                                <Button type="text" className='enter_btn' onClick={() => {
                                    history.push('/grants')
                                }}>Enter</Button>
                            </div>
                        </div>
                        <div className='block_list ml-36 mt-228'>
                            <div className='block_item border_right_0'>
                                <div className='title flex_c'>
                                    <span className='title_text'>Hackathons</span>
                                </div>
                                <div className='descript'>Creat
                                    the coolest NFT projects</div>
                                <Button type="text" className='enter_btn' onClick={() => {
                                    history.push('/hackathons')
                                }}>Enter</Button>
                            </div>
                            <div className='block_item mt-50'>
                                <div className='title flex_c'>
                                    <span className='title_text'>Agora</span>
                                </div>
                                <div className='descript'>Post events such as
                                    whitelist, mint, etc</div>
                                <Button type="text" className='enter_btn' onClick={() => {
                                    history.push('/agora')
                                }}>Enter</Button>
                            </div>
                        </div>
                    </div>
                    <div className='float_block_right flex_right'>
                        <div className='block_list mr-36 mt-228'>
                            <div className='block_item border_left_0'>
                                <div className='title flex_c'>
                                    <span className='title_text'>Muse</span>
                                </div>
                                <div className='descript'>A custom NFT
                                    educational community</div>
                                <Button type="text" className='enter_btn' onClick={() => {
                                    history.push('/muse')
                                }}>Enter</Button>
                            </div>
                            <div className='block_item mt-50'>
                                <div className='title flex_c'>
                                    <span className='title_text'>Workshop</span>
                                </div>
                                <div className='descript'>Find great partners
                                    to build nft brand</div>
                                <div className='tips mt-25'>Coming soon</div>
                            </div>
                        </div>
                        <div className='block_list'>
                            <div className='block_item'>
                                <div className='title flex_c'>
                                    <span className='title_text'>Buff</span>
                                </div>
                                <div className='descript'>One-stop anagement
                                    of sns accounts</div>
                                <Button type="text" className='enter_btn' onClick={() => {
                                    history.push('/buff')
                                }}>Enter</Button>
                            </div>
                            <div className='block_item mt-50 border_right_0'>
                                <div className='title flex_c'>
                                    <span className='title_text'>Thumbs-up</span>
                                </div>
                                <div className='descript'>Show appreciation
                                    for each other</div>
                                <div className='tips mt-25'>Coming soon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;