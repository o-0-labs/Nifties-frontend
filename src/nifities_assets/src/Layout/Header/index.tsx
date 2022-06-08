import React, { useEffect, useState } from 'react'
import { Dropdown, Menu, Space, Button } from 'antd'
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useStore } from 'store/utils';
import './index.scss'

const plugIcon = require('static/plug.png')

const Header = () => {
    const [openPlug, setOpenPlug] = useState(false)
    const [openTips, setOpenTips] = useState(false)
    const { GlobalStore } = useStore()
    useEffect(() => {
    }, [])

    const handleClose = () => {
        setOpenPlug(false)
        setOpenTips(false)
    }

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

    const createContact = async () => {
        const isInstalled = GlobalStore.checkPlugStatus()
        if (isInstalled) {
            GlobalStore.login()
        } else {
            setOpenTips(true)
        }

    }

    const onSignClick = () => {
        setOpenPlug(true)
    }

    const toDownLoad = () => {
        // @ts-ignore
        window.open('https://plugwallet.ooo/', '_blank').location
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
        <Dropdown className='nav_more csp' overlayClassName="dropdown_nav" overlay={<Menu items={magicItem} />} arrow={true} placement="bottomRight">
            <MenuOutlined />
        </Dropdown>
        <Dialog className='plugModal' onClose={handleClose} open={openPlug}>
            <DialogTitle className='title'>Connect wallet</DialogTitle>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={createContact}>
                        <img className='plug_icon' src={plugIcon} />
                        <ListItemText primary="Plug" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Dialog>

        <Dialog className='tipsModal' onClose={handleClose} open={openTips}>
            <div className='tips_wrap'>
                <div className='tc title'>You need to install Plug</div>
                <div className='content'>You need to install Plug before using it to connect to Nifties. Go <a className='link' onClick={toDownLoad}>here</a> to install it.</div>
            </div>
        </Dialog>
    </header >
}

export default Header