import React from 'react'
import Routers from './router';
import { Provider } from "mobx-react";
import { storesContext } from "./store";
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import './App.scss'

const store = {
    storesContext
};
const App = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Provider store={store}>
                <Routers />
            </Provider>
        </ConfigProvider>
    )
}

export default App;