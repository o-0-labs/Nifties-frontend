import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home'
import Test from '../pages/Test'

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/test" component={Test} />
                <Redirect to="/404" />
            </Switch>
        </HashRouter>
    )
}

export default Router;