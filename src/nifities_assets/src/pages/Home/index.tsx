import React, { useEffect } from 'react';
import { Dropdown, Menu } from 'antd';
import { useHistory } from "react-router-dom"
import { useStore, observer } from "store/utils";
import './index.scss'

const Home = () => {
    const { GlobalStore } = useStore();
    const history = useHistory()

    useEffect(() => {
        // GlobalStore.creatConnect()
    }, [])


    return (
        <div className='home_wrap'>
            <div className='header_wrap'>
                <div className='header'>
                    <div className='flex_sb'>
                        <img src="http://iph.href.lu/300x100" alt="logo" />
                        <div className='menu'>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default observer(Home);