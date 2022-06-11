import React, { useEffect, useState, Fragment } from 'react'
import { Dropdown, Menu, Space, Button, Modal } from 'antd'
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InfoModal from './InfoModal'
import { useStore, observer } from 'store/utils';

import './index.scss'

const plugIcon = require('static/plug.png')

const Header = () => {
	const [openPlug, setOpenPlug] = useState(false)
	const { GlobalStore } = useStore()
	useEffect(() => {
	}, [])

	const handleClose = () => {
		setOpenPlug(false)
	}

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
			Modal.info({
				icon: '',
				title: (<div className='tc'>You need to install Plug</div>),
				content: (<div className='content'>You need to install Plug before using it to connect to Nifties. Go <a className='link' onClick={toDownLoad}>here</a> to install it.</div>)
			});
		}
	}


	const toDownLoad = () => {
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
			{GlobalStore.userName ? <Fragment>
				<i className='iconfont icon-Search mr-24 csp' />
				<i className='iconfont icon-Wallet mr-24 csp' />
				<div className='flex_left csp'>
					<img className='profile' src={GlobalStore.profilePhoto} alt="logo" />
					<span className='user_name'>{GlobalStore.userName}</span>
				</div>
			</Fragment> : <Button type='primary' className='sign_btn' ghost onClick={() => setOpenPlug(true)}>sign in</Button>}
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
		<InfoModal />
	</header >
}

export default observer(Header)