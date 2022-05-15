import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home'
import RouteConfig, { IRouteItem } from './RouteConfig'

const Router = () => {
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
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                {getRouteNodes()}
                <Redirect to="/404" />
            </Switch>
        </HashRouter>
    )
}

export default Router;