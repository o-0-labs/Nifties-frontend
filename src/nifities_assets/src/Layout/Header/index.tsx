/*
 * @Author: shenpeng 
 * @Date: 2022-06-13 22:34:43 
 * @Last Modified by: shenpeng
 * @Last Modified time: 2022-06-19 18:19:22
 */
import React, { useEffect, useState, Fragment } from 'react'
import { Dropdown, Menu, Space, Button, Modal, Popover, message } from 'antd'
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import InfoModal from './InfoModal'
import { useStore, observer } from 'store/utils';
import { useHistory } from "react-router-dom"
import { removeToken, getPrincipalId } from 'utils/Auth'

import './index.scss'

const plugIcon = require('static/plug.png')
const dfinity = require('static/dfinity.png')
const agora = require('static/agora.png')
const pona = require('static/pona.png')
const hackathons = require('static/hackathons.png')
const grants = require('static/grants.png')
const buff = require('static/buff.png')
const logo = require('static/logo.png')
const muse = require('static/muse.png')
const discord = require('static/discord.png')
const mission = require('static/mission.png')
const about = require('static/about.png')

const Header = () => {
    const [openPlug, setOpenPlug] = useState(false)
    const { GlobalStore } = useStore()
    const history = useHistory()
    // useEffect(() => {
    //     GlobalStore.requestBalance()
    // }, [GlobalStore.balance])

    const renderMenuItem = (title: string, des: string, icon: string) => {
        return <div className='dropmenu_item flex_left'>
            {icon && <img className='menu_icon' src={icon} alt="" />}
            <a className='ml-8' href={`/#/${title}`}>
                <div className='title'>{title}</div>
                {des && <div className='des'>{des}</div>}
            </a>
        </div>
    }

    const magicItem = [
        { label: renderMenuItem('Hackathons', 'Creat the coolest NFT projects', hackathons), key: 'Hackathons' },
        { label: renderMenuItem('Grants', 'Crowdfunding for open resources', grants), key: 'Grants' },
        { label: renderMenuItem('Agora', 'Post events such as whitelist, mint, etc', agora), key: 'Agora' },
        { label: renderMenuItem('Buff', 'One-stop management of NFT projects', buff), key: 'Buff' },
        { label: renderMenuItem('Muse', 'A custom NFT educational community', muse), key: 'Muse' },
    ]

    const communityItem = [
        { label: renderMenuItem('Pona ', 'Create the coolest NFT projects', pona), key: 'Pona' },
        { label: renderMenuItem('Discord', 'Connect with us', discord), key: 'Discord' },
    ]

    const organizationItem = [
        { label: renderMenuItem('About ', '', mission), key: 'About' },
        { label: renderMenuItem('Mission', '', about), key: 'Mission' },
    ]

    const mobileMenu = [
        {
            label: 'Magic', key: 'Magic',
            children: [
                {
                    label: (<a href={`/#/Hackathons`}>
                        <div className='title'>Hackathons</div>
                    </a>),
                    key: 'Hackathons'
                },
                {
                    label: (<a href={`/#/Grants`}>
                        <div className='title'>Grants</div>
                    </a>), key: 'Grants'
                },
                {
                    label: (<a href={`/#/Agora`}>
                        <div className='title'>Agora</div>
                    </a>), key: 'Agora'
                },
                {
                    label: (<a href={`/#/Buff`}>
                        <div className='title'>Buff</div>
                    </a>), key: 'Buff'
                },
                {
                    label: (<a href={`/#/Muse`}>
                        <div className='title'>Muse</div>
                    </a>), key: 'Muse'
                },
            ],
        },
        {
            label: 'Community', key: 'Community',
            children: [
                {
                    label: (<a href={`/#/Pona`}>
                        <div className='title'>Pona</div>
                    </a>), key: 'Pona'
                },
                {
                    label: (<a href={`/#/Discord`}>
                        <div className='title'>Discord</div>
                    </a>), key: 'Discord'
                },
            ],
        },
        {
            label: 'Organization', key: 'Organization',
            children: [
                {
                    label: (<a href={`/#/About`}>
                        <div className='title'>About</div>
                    </a>), key: 'About'
                },
                {
                    label: (<a href={`/#/Mission`}>
                        <div className='title'>Mission</div>
                    </a>), key: 'Mission'
                },
            ],

        }
    ]

    const login = async () => {
        setOpenPlug(false)
        const isInstalled = GlobalStore.checkPlugStatus()
        if (isInstalled) {
            await GlobalStore.login()
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
        const text = getPrincipalId()
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
            <div className='ml-14 fs-12 plug_address wes_1'>{getPrincipalId()}</div>
        </div>
        <div className='flex_left'>
            <img className='plug_icon' src={dfinity} />
            <div className='ml-14 fs-12'>{GlobalStore.balance?.toFixed(2)}</div>
        </div>
    </div>

    return <header className='header flex_sb'>
        <div className='nav_wrap flex_left'>
            <div className='login csp flex_left' onClick={() => history.push('/')}>
                <img className='login_img' src={logo} alt="logo" />
                <p className='logo_title'>Nifties</p>
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
            </Fragment> : <Button type='primary' className='sign_btn' onClick={() => setOpenPlug(true)}>sign in</Button>}
        </div>
        <Dropdown className='nav_more csp' overlayClassName="dropdown_nav" overlay={<Menu items={mobileMenu} />} arrow={true} placement="bottomRight">
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