import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from 'pages/Home'
import RouteConfig, { IRouteItem } from './RouteConfig'
import { Dropdown, Menu, Space, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { useStore, observer } from 'store/utils'
const plug = require('static/plug.png')
const Main = observer(() => {
    const { GlobalStore } = useStore()
    const items = [
        { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
        { label: '菜单项二', key: 'item-2' },
        {
            label: '子菜单',
            key: 'submenu',
            children: [{ label: '子菜单项', key: 'submenu-item-1' }],
        },
    ];
    const getRouteNodes = () => {
        return RouteConfig.map((item: IRouteItem, index: number) => {
            return <Route
                path={item.path}
                exact={item.isExact || false}
                key={index}
                component={item.component}
            />;
        });
    }

    const onSignClick = () => {
        GlobalStore.creatConnect()
    }
    const WalletMenu = () => {
        return <div className='flex_column wallet_menu'>
            <div>Connect wallet</div>
            <div className='flex_left'>
                <img src={plug} alt="" />
                <span>Plug</span>
            </div>
        </div>
    }
    return <section>
        <header className='header flex_sb'>
            <div className='flex_left'>
                <img className='login' src="" alt="logo" />
                <div className='menu_left'>
                    <Dropdown overlay={<Menu items={items} />} arrow={true}>
                        <a className='menu_item' onClick={e => e.preventDefault()}>
                            <Space>
                                Magi
                                <DownOutlined className='menu_icon' />
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown overlay={<Menu items={items} />} arrow={true}>
                        <a className='menu_item' onClick={e => e.preventDefault()}>
                            <Space>
                                Community
                                <DownOutlined className='menu_icon' />
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown overlay={<Menu items={items} />} arrow={true}>
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
                <i className='iconfont icon-Search mr-25 csp' />
                <i className='iconfont icon-Wallet mr-28 csp' />
                {/* <div className='user flex_left'>
                    <img className='profile' src="http://iph.href.lu/300x100" alt="logo" />
                    <span className='user_name'>Windy</span>
                </div> */}
                <Button type='primary' className='sign_btn' ghost onClick={onSignClick}>sign in</Button>
            </div>
        </header>
        <main>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                {getRouteNodes()}
                <Redirect to="/404" />
            </Switch>
        </main>
        <footer className='footer flex_sb'>
            <div className='logo_wrap'>
                <img className='login' src="" alt="logo" />
            </div>
            <div className='flex_left flex_start'>
                <div className='flex_column footer_menu_list'>
                    <h5 className='footer_menu_title'>Magic</h5>
                    <a className='footer_menu_item' href="">Hackathons</a>
                    <a className='footer_menu_item' href="">Grants</a>
                    <a className='footer_menu_item' href="">Agora</a>
                    <a className='footer_menu_item' href="">Promotion</a>
                    <a className='footer_menu_item' href="">Muse</a>
                </div>
                <div className='flex_column footer_menu_list'>
                    <h5 className='footer_menu_title'>Community</h5>
                    <a className='footer_menu_item' href="">Pona</a>
                    <a className='footer_menu_item' href="">Discord</a>
                </div>
                <div className='flex_column footer_menu_list'>
                    <h5 className='footer_menu_title'>Organization</h5>
                    <a className='footer_menu_item' href="">About</a>
                    <a className='footer_menu_item' href="">Mission</a>
                </div>
                <div className='flex_column footer_menu_list'>
                    <h5 className='footer_menu_title'>Legal</h5>
                    <a className='footer_menu_item' href="">Terms</a>
                    <a className='footer_menu_item' href="">Privacy</a>
                </div>
            </div>

        </footer>
    </section>
})
const Router = () => {

    return (
        <HashRouter>
            <Switch>
                <Route component={Main} />
            </Switch>
        </HashRouter>
    )
}

export default Router;