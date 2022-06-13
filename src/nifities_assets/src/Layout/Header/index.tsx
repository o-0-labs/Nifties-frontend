import React, { useEffect, useState, Fragment } from 'react'
import { Dropdown, Menu, Space, Button, Modal, Popover, message } from 'antd'
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import InfoModal from './InfoModal'
import { useStore, observer } from 'store/utils';
import { useHistory } from "react-router-dom"
import { removeToken } from 'utils/Auth'

import './index.scss'

const plugIcon = require('static/plug.png')
const dfinity = require('static/dfinity.png')

const Header = () => {
    const [openPlug, setOpenPlug] = useState(false)
    const { GlobalStore } = useStore()
    const history = useHistory()
    useEffect(() => {
        GlobalStore.requestBalance()
    }, [GlobalStore.balance])

    const renderMenuItem = (title: string, des: string) => {
        return <div className='dropmenu_item'>
            <a href={`/#/${title}`}>
                <div className='title'>{title}</div>
                <div className='des'>{des}</div>
            </a>
        </div>
    }

    const magicItem = [
        { label: renderMenuItem('Hackathons', 'Creat the coolest NFT projects'), key: 'Hackathons' },
        { label: renderMenuItem('Grants', 'Crowdfunding for open resources'), key: 'Grants' },
        { label: renderMenuItem('Agora', 'Post events such as whitelist, mint, etc'), key: 'Agora' },
        { label: renderMenuItem('Buff', 'Buff'), key: 'Buff' },
        { label: renderMenuItem('Muse', 'Muse'), key: 'Muse' },
    ]

    const communityItem = [
        { label: renderMenuItem('Pona ', 'Pona'), key: 'Pona' },
        { label: renderMenuItem('Discord', 'Discord'), key: 'Discord' },
    ]

    const organizationItem = [
        { label: renderMenuItem('About ', 'About'), key: 'About' },
        { label: renderMenuItem('Mission', 'Mission'), key: 'Mission' },
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
            Modal.info({
                icon: '',
                title: (<div className='tc'>You need to install Plug</div>),
                content: (<div className='content'>You need to install Plug before using it to connect to Nifties. Go <a className='link' onClick={toDownLoad}>here</a> to install it.</div>)
            });
        }
    }


    const toDownLoad = () => {
        // @ts-ignore
        window.open('https://plugwallet.ooo/', '_blank').location
    }

    const copyAddress = () => {
        const text = `${GlobalStore.principalId}`
        if (navigator.clipboard) {
            // clipboard api 复制
            navigator.clipboard.writeText(text).then(() => {
                message.success('复制成功')
            });
        } else {
            // 1.创建一个可选中元素
            let textArea = document.createElement("textarea");
            textArea.value = text;
            // 2.使用定位，阻止页面滚动
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Fallback: Copying text command was ' + msg);
                message.success('复制成功')
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }
            // 3.移除元素
            document.body.removeChild(textArea);
        }
    }

    const plugMenuContent = () => <div>
        <div className='plug_menu_item csp' onClick={copyAddress}>Copy Address</div>
        <div className='plug_menu_item csp' onClick={() => { removeToken(); window.location.reload() }}>Disconnected</div>
    </div>

    const plugMenuTitle = () => <div>
        <div className='plug_menu_title'>Connected wallet</div>
        <div className='flex_left mb-10'>
            <img src={plugIcon} />
            <div className='ml-14 fs-12 plug_address wes_1'>{GlobalStore.principalId}</div>
        </div>
        <div className='flex_left'>
            <img className='plug_icon' src={dfinity} />
            <div className='ml-14 fs-12'>{GlobalStore.balance?.toFixed(2)}</div>
        </div>
    </div>

    return <header className='header flex_sb'>
        <div className='nav_wrap flex_left'>
            <div className='login csp' onClick={() => history.push('/')}>
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
                <Dropdown overlayClassName="header_dropmenu_wrap" overlay={<Menu items={communityItem} />} arrow={true}>
                    <a className='menu_item' onClick={e => e.preventDefault()}>
                        <Space>
                            Community
                            <DownOutlined className='menu_icon' />
                        </Space>
                    </a>
                </Dropdown>
                <Dropdown overlayClassName="header_dropmenu_wrap" overlay={<Menu items={organizationItem} />} arrow={true}>
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
            {GlobalStore.userInfo.userName ? <Fragment>
                <i className='iconfont icon-Search mr-24 csp' />
                <Popover overlayClassName='plug_menu' content={plugMenuContent} title={plugMenuTitle} getPopupContainer={(triggerNode: HTMLElement) => triggerNode.parentElement} trigger="click">
                    <i className='iconfont icon-Wallet mr-24 csp' />
                </Popover>
                <div className='flex_left csp'>
                    <img className='profile' src={GlobalStore.userInfo.profilePhoto} alt="logo" />
                    <span className='user_name'>{GlobalStore.userInfo.userName}</span>
                </div>
            </Fragment> : <Button type='primary' className='sign_btn' ghost onClick={() => setOpenPlug(true)}>sign in</Button>}
        </div>
        <Dropdown className='nav_more csp' overlayClassName="dropdown_nav" overlay={<Menu items={magicItem} />} arrow={true} placement="bottomRight">
            <MenuOutlined />
        </Dropdown>
        <Modal className='tips_modal' width={168} getContainer={false} visible={openPlug} footer={null} closable={false} onCancel={() => setOpenPlug(false)}>
            <div className='tips_title'>Connect wallet</div>
            <div className='flex_left plug_btn csp' onClick={login}>
                <img className='plug_icon' src={plugIcon} />
                <span className='ml-14'>Plug</span>
            </div>
        </Modal>
        <InfoModal />
    </header >
}

export default observer(Header)