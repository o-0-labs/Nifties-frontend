import React from 'react'
import Loadable from 'react-loadable';
import { Spin } from 'antd';

export const Loading = React.memo(
    (props: any) => {
        if (props?.error) {
            console.error(props?.error);
            return null;
        }
        return (
            <div className="flex_c" style={{ height: '100vh' }
            }>
                <Spin size="large" />
            </div>
        );
    },
    () => true
);

export interface IRouteItem {
    path: string;
    isExact?: boolean;
    component:
    | (React.ComponentClass<{}, any> & Loadable.LoadableComponent)
    | (React.FunctionComponent<{}> & Loadable.LoadableComponent);
}

const routes = [
    {
        isExact: true,
        path: '/buff',
        component: Loadable({
            loader: () => import('../pages/Buff'),
            loading: Loading
        }),
    },
    {
        isExact: true,
        path: '/hackathons',
        component: Loadable({
            loader: () => import('../pages/Hackathons'),
            loading: Loading
        }),
    },
    {
        isExact: true,
        path: '/hackathons/:id',
        component: Loadable({
            loader: () => import('../pages/Hackathons/detail'),
            loading: Loading
        }),
    },
    {
        isExact: true,
        path: '/grants',
        component: Loadable({
            loader: () => import('../pages/Grants'),
            loading: Loading
        }),
    },
    {
        isExact: true,
        path: '/grants/create',
        component: Loadable({
            loader: () => import('../pages/Grants/create'),
            loading: Loading
        }),
    },
    {
        isExact: true,
        path: '/agora',
        component: Loadable({
            loader: () => import('../pages/Agora'),
            loading: Loading
        }),
    },
    {
        isExact: true,
        path: '/muse',
        component: Loadable({
            loader: () => import('../pages/Muse'),
            loading: Loading
        }),
    },
    {
        isExact: true,
        path: '/pona',
        component: Loadable({
            loader: () => import('../pages/Pona'),
            loading: Loading
        }),
    },
    {
        isExact: true,
        path: '/addNFT',
        component: Loadable({
            loader: () => import('../pages/Buff/AddNFT'),
            loading: Loading
        }),
    },
    {
        isExact: true,
        path: '/accountList',
        component: Loadable({
            loader: () => import('../pages/Buff/AccountList'),
            loading: Loading
        }),
    },
    {
        isExact: true,
        path: '/authPage',
        component: Loadable({
            loader: () => import('../pages/Buff/AuthPage'),
            loading: Loading
        }),
    },
    {
        isExact: true,
        path: '/mission',
        component: Loadable({
            loader: () => import('../pages/Mission'),
            loading: Loading
        }),
    },
    {
        isExact: true,
        path: '/about',
        component: Loadable({
            loader: () => import('../pages/About'),
            loading: Loading
        }),
    },
];

export default routes;
