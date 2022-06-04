import React from 'react'
import { Row, Col } from 'antd'
import './index.scss'

const Footer = () => {
    return <footer className='footer'>
        <div className='footer_container flex_sb'>
            <div className='logo_wrap'>
                <img className='login' src="" alt="logo" />
            </div>
            <div className='flex_left flex_start'>
                <div className='flex_column footer_menu_list'>
                    <h5 className='footer_menu_title'>Magic</h5>
                    <a className='footer_menu_item' href="">Hackathons</a>
                    <a className='footer_menu_item' href="">Grants</a>
                    <a className='footer_menu_item' href="">Agora</a>
                    <a className='footer_menu_item' href="">Promotion</a>
                    <a className='footer_menu_item' href="">Muse</a>
                </div>
                <div className='flex_column footer_menu_list'>
                    <h5 className='footer_menu_title'>Community</h5>
                    <a className='footer_menu_item' href="">Pona</a>
                    <a className='footer_menu_item' href="">Discord</a>
                </div>
                <div className='flex_column footer_menu_list'>
                    <h5 className='footer_menu_title'>Organization</h5>
                    <a className='footer_menu_item' href="">About</a>
                    <a className='footer_menu_item' href="">Mission</a>
                </div>
                <div className='flex_column footer_menu_list'>
                    <h5 className='footer_menu_title'>Legal</h5>
                    <a className='footer_menu_item' href="">Terms</a>
                    <a className='footer_menu_item' href="">Privacy</a>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer