import React from 'react'
import { Dropdown, Menu, Space, Button } from 'antd'
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import './index.scss'

const Header = () => {

    const renderMenuItem = (title: string, des: string) => {
        return <div className='dropmenu_item'>
            <div className='title'>{title}</div>
            <div className='des'>{des}</div>
        </div>
    }

    const magicItem = [
        { label: renderMenuItem('Hackathons', 'Creat the coolest NFT projects'), key: 'Hackathons' },
        { label: renderMenuItem('Grants', 'Crowdfunding for open resources'), key: 'Grants' },
        { label: renderMenuItem('Agora', 'Post events such as whitelist, mint, etc'), key: 'Agora' },
        { label: renderMenuItem('Promotion', 'Promotion'), key: 'Promotion' },
        { label: renderMenuItem('Muse', 'Muse'), key: 'Muse' },
    ]
    const items = [
        { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
        { label: '菜单项二', key: 'item-2' },
        {
            label: '子菜单',
            key: 'submenu',
            children: [{ label: '子菜单项', key: 'submenu-item-1' }],
        },
    ];
    const onSignClick = () => {
    }

    return <header className='header flex_sb'>
        <div className='nav_wrap flex_left'>
            <div className='login'>
                <img className='login_img' src="" alt="logo" />
            </div>
            <div className='menu_left'>
                <Dropdown overlayClassName="header_dropmenu_wrap" overlay={<Menu items={magicItem} />} arrow={true}>
                    <a className='menu_item' onClick={e => e.preventDefault()}>
                        <Space>
                            Magic
                            <DownOutlined className='menu_icon' />
                        </Space>
                    </a>
                </Dropdown>
                <Dropdown overlayClassName="header_dropmenu_wrap" overlay={<Menu items={magicItem} />} arrow={true}>
                    <a className='menu_item' onClick={e => e.preventDefault()}>
                        <Space>
                            Community
                            <DownOutlined className='menu_icon' />
                        </Space>
                    </a>
                </Dropdown>
                <Dropdown overlayClassName="header_dropmenu_wrap" overlay={<Menu items={magicItem} />} arrow={true}>
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
            <i className='iconfont icon-Search mr-24 csp' />
            <i className='iconfont icon-Wallet mr-24 csp' />
            {/* <div className='user flex_left'>
            <img className='profile' src="http://iph.href.lu/300x100" alt="logo" />
            <span className='user_name'>Windy</span>
        </div> */}
            <Button type='primary' className='sign_btn' ghost onClick={onSignClick}>sign in</Button>
        </div>
        <Dropdown className='nav_more csp' overlayClassName="dropdown_nav" overlay={<Menu items={items} />} arrow={true} placement="bottomRight">
            <MenuOutlined />
        </Dropdown>
    </header>
}

export default Header