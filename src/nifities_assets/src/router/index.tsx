import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from 'pages/Home'
import RouteConfig, { IRouteItem } from './RouteConfig'
import Layout from '../Layout';

const Main = () => {
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

    return <Layout>
        <main>
            <Switch>
                {getRouteNodes()}
                <Redirect to="/404" />
            </Switch>
        </main>
    </Layout>
}

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route component={Main} />
            </Switch>
        </HashRouter>
    )
}

export default Router;