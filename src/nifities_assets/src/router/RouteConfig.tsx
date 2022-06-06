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
        path: '/test',
        component: Loadable({
            loader: () => import('../pages/Test'),
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
];

export default routes;
