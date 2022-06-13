import React from 'react'
import Routers from './router';
import { Provider } from "mobx-react";
import { storesContext } from "./store";
import { ConfigProvider, Button } from 'antd'
import en_GB from 'antd/es/locale/en_GB';
import './index.css'
import './App.scss'
import './style/antd/theme.less'

const store = {
    storesContext
};

class ErrorBoundary extends React.Component<any, any> {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback();
        }

        return this.props.children;
    }
}
const App = () => {
    const fallback = () => {
        return (
            <div
                style={{
                    textAlign: 'center',
                    paddingTop: '20%',
                }}
            >
                <h2>页面出现了异常</h2>
                <Button onClick={() => window.location.reload()}>点击刷新</Button>
            </div>
        );
    };
    return (
        <ErrorBoundary fallback={fallback}>
            <ConfigProvider locale={en_GB}>
                <Provider store={store}>
                    <Routers />
                </Provider>
            </ConfigProvider>
        </ErrorBoundary>
    )
}

export default App;