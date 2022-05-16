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
                    <Button type="primary" className="create_btn">Create</Button>
                </div>
            </div>
        </div >
    )
}

export default observer(Home);