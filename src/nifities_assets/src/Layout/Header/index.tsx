import React, { useEffect, useState } from 'react'
import { Dropdown, Menu, Space, Button } from 'antd'
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import { useStore } from 'store/utils';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import './index.scss'

const plugIcon = require('static/plug.png')

const Header = () => {
    const [openPlug, setOpenPlug] = useState(false)
    const [openTips, setOpenTips] = useState(false)
    const [openInfo, setOpenInfo] = useState(true)
    const { GlobalStore } = useStore()
    const { } = useFormControl() || {}
    useEffect(() => {
    }, [])

    const handleClose = () => {
        setOpenPlug(false)
        setOpenTips(false)
        setOpenInfo(false)
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

    const login = async () => {
        setOpenPlug(false)
        const isInstalled = GlobalStore.checkPlugStatus()
        if (isInstalled) {
            const res = await GlobalStore.creatConnect()
            if (res === 'success') {
                await GlobalStore.login()
            }
        } else {
            setOpenTips(true)
        }
    }


    const toDownLoad = () => {
        setOpenTips(false)
        // @ts-ignore
        window.open('https://plugwallet.ooo/', '_blank').location
    }

    const onSubmit = () => {

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
            <Button type='primary' className='sign_btn' ghost onClick={() => setOpenPlug(true)}>sign in</Button>
        </div>
        <Dropdown className='nav_more csp' overlayClassName="dropdown_nav" overlay={<Menu items={magicItem} />} arrow={true} placement="bottomRight">
            <MenuOutlined />
        </Dropdown>
        <Dialog className='plugModal' onClose={handleClose} open={openPlug}>
            <DialogTitle className='title'>Connect wallet</DialogTitle>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={login}>
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
        <Dialog className='infoModal' open={openInfo} onClose={handleClose}>
            <DialogTitle className='tc'>Welcome to Formfunction!</DialogTitle>
            <DialogContent>
                <DialogContentText className='tc'>
                    To set up your account, you just need to choose a username and enter your email.
                    You can always edit this info later.
                </DialogContentText>
                <div>
                    <div className='mt-20 flex_left'>
                        <div className='label'><span>*</span>UsreName</div>
                        <TextField className='ml-32' color='primary' required id="userName" label="UsreName" />
                    </div>
                    <div>Minimum 4 characters, periods and underscores are allowed.</div>
                    <div className='mt-20 flex_left'>
                        <div className='label'><span>*</span>Email</div>
                        <TextField className='ml-32' color='primary' required id="email" label="Email" />
                    </div>
                    <div>We'll use it to send useful notifications.</div>
                </div>
            </DialogContent>
            <div className='flex_c mt-20 mb-18'>
                <Button type='primary' ghost onClick={onSubmit} size="large">Explore</Button>
            </div>
        </Dialog>
    </header >
}

export default Header