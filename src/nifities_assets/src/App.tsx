import React from 'react'
import Routers from './router';
import { Provider } from "mobx-react";
import { storesContext } from "./store";
import { ConfigProvider } from 'antd'
import en_GB from 'antd/es/locale/en_GB';
import './App.scss'
import './style/antd/theme.less'
import './index.css'

const store = {
    storesContext
};
const App = () => {
    return (
        <ConfigProvider locale={en_GB}>
            <Provider store={store}>
                <Routers />
            </Provider>
        </ConfigProvider>
    )
}

export default App;