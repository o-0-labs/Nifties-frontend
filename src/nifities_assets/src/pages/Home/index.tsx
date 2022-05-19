import React, { useEffect } from 'react';
import { Dropdown, Menu, Space, Button } from 'antd';
import { useHistory } from "react-router-dom"
import { useStore, observer } from "store/utils";
import { DownOutlined } from '@ant-design/icons';
import './index.scss'
const items = [
    { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
    { label: '菜单项二', key: 'item-2' },
    {
        label: '子菜单',
        key: 'submenu',
        children: [{ label: '子菜单项', key: 'submenu-item-1' }],
    },
];
const Home = () => {
    const { GlobalStore } = useStore();
    const history = useHistory()

    useEffect(() => {
        // GlobalStore.creatConnect()
    }, [])


    return (
        <div className='home_wrap'>
            <div className='header_wrap'>
                <div className='header flex_sb'>
                    <div className='flex_left'>
                        <img className='login' src="" alt="logo" />
                        <div className='menu_left'>
                            <Dropdown overlay={<Menu items={items} />} trigger={['click']} arrow={true}>
                                <a className='menu_item' onClick={e => e.preventDefault()}>
                                    <Space>
                                        Magi
                                        <DownOutlined className='menu_icon' />
                                    </Space>
                                </a>
                            </Dropdown>
                            <Dropdown overlay={<Menu items={items} />} trigger={['click']} arrow={true}>
                                <a className='menu_item' onClick={e => e.preventDefault()}>
                                    <Space>
                                        Community
                                        <DownOutlined className='menu_icon' />
                                    </Space>
                                </a>
                            </Dropdown>
                            <Dropdown overlay={<Menu items={items} />} trigger={['click']} arrow={true}>
                                <a className='menu_item' onClick={e => e.preventDefault()}>
                                    <Space>
                                        Organization
                                        <DownOutlined className='menu_icon' />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='menu_right flex_left'>
                        <div className='user flex_left'>
                            <img className='profile' src="http://iph.href.lu/300x100" alt="logo" />
                            <span className='user_name'>Windy</span>
                        </div>
                    </div>
                </div>
                <div className='sloga_wrap'>
                    <h2 className='sloga'>Explore, Collect, and
                        Manege NFTs</h2>
                    <h3 className='sub_title'>On the world's Best NFT incubator</h3>
                    {/* <Button type="primary" className="create_btn">Create</Button> */}
                </div>
                <div className='bg_text'>NFT</div>
                <div className='float_block_wrap flex_sb'>
                    <div className='float_block_left flex_left'>
                        <div className='block_list'>
                            <div className='block_item'>
                                <div className='title'>
                                    Bounties
                                </div>
                                <div className='descript'>Design resources
                                    at  your finger tips</div>
                                <div className='tips mt-25'>Coming soon</div>
                            </div>
                            <div className='block_item mt-50 border_left_0'>
                                <div className='title'>Grants</div>
                                <div className='descript'>Crowdfunding
                                    for open resources</div>
                                <div className='enter_btn mt-25'>Enter</div>
                            </div>
                        </div>
                        <div className='block_list ml-36 mt-228'>
                            <div className='block_item border_right_0'>
                                <div className='title'>
                                    Hackathons
                                </div>
                                <div className='descript'>Creat
                                    the coolest NFT projects</div>
                                <div className='enter_btn mt-25'>Enter</div>
                            </div>
                            <div className='block_item mt-50'>
                                <div className='title'>Agora</div>
                                <div className='descript'>Post events such as
                                    whitelist, mint, etc</div>
                                <div className='enter_btn mt-25'>Enter</div>
                            </div>
                        </div>
                    </div>
                    <div className='float_block_right flex_right'>
                        <div className='block_list mr-36 mt-228'>
                            <div className='block_item border_left_0'>
                                <div className='title'>
                                    Bounties
                                </div>
                                <div className='descript'>Design resources
                                    at  your finger tips</div>
                                <div className='tips mt-25'>Coming soon</div>
                            </div>
                            <div className='block_item mt-50'>
                                <div className='title'>Grants</div>
                                <div className='descript'>Crowdfunding
                                    for open resources</div>
                                <div className='enter_btn mt-25'>Enter</div>
                            </div>
                        </div>
                        <div className='block_list'>
                            <div className='block_item'>
                                <div className='title'>
                                    Bounties
                                </div>
                                <div className='descript'>Design resources
                                    at  your finger tips</div>
                                <div className='tips mt-25'>Coming soon</div>
                            </div>
                            <div className='block_item mt-50 border_right_0'>
                                <div className='title'>Grants</div>
                                <div className='descript'>Crowdfunding
                                    for open resources</div>
                                <div className='enter_btn mt-25'>Enter</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_wrap'>
                <div className='logo_wrap'></div>
            </div>
        </div >
    )
}

export default observer(Home);