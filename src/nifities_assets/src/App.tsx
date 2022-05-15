import React, { Suspense } from 'react'
import Routers from './router';
import { Provider } from "mobx-react";
import { storesContext } from "./store";
import {Spin} from 'antd'
import './App.scss'

const store = {
    storesContext
};
const App = () => {
    return (
        <Provider store={store}>
            <Suspense fallback={<Spin />}>
                <Routers />
            </Suspense>
        </Provider>
    )
}

export default App;