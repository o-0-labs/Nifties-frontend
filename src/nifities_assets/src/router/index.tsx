import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from 'pages/Home'
import RouteConfig, { IRouteItem } from './RouteConfig'
import { Dropdown, Menu, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons';

const Main = () => {
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
    return <section>
        <header className='header flex_sb'>
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
        </header>
        <main>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                {getRouteNodes()}
                <Redirect to="/404" />
            </Switch>
        </main>
        <footer className='footer'>
            <div className='logo_wrap'></div>
        </footer>
    </section>
}
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