import React from 'react'
import './index.scss'
import { useHistory } from 'react-router-dom'
const logo = require('static/logo.png')

const Footer = () => {
    const history = useHistory()
    return <footer className='footer flex_left flex_wrap'>
        <div className='logo_wrap flex_left csp' onClick={() => history.push('/')}>
            <img className='login' src={logo} alt="logo" />
            <p className='logo_title'>Nifties</p>
        </div>
        <div className='footer_menu_wrap flex_left flex_start flex_wrap'>
            <div className='flex_column footer_menu_list'>
                <h5 className='footer_menu_title'>Magic</h5>
                <a className='footer_menu_item' href="/#/Hackathons">Hackathons</a>
                <a className='footer_menu_item' href="/#/Grants">Grants</a>
                <a className='footer_menu_item' href="/#/Agora">Agora</a>
                <a className='footer_menu_item' href="/#/Buff">Buff</a>
                <a className='footer_menu_item' href="/#/Muse">Muse</a>
            </div>
            <div className='flex_column footer_menu_list'>
                <h5 className='footer_menu_title'>Community</h5>
                <a className='footer_menu_item' href="/#/Pona">Pona</a>
                <a className='footer_menu_item' target="_blank" href="https://discord.gg/GPVP2kxz">Discord</a>
            </div>
            <div className='flex_column footer_menu_list'>
                <h5 className='footer_menu_title'>Organization</h5>
                <a className='footer_menu_item' href="/#/about">About</a>
                <a className='footer_menu_item' href="/#/mission">Mission</a>
            </div>
            {/* <div className='flex_column footer_menu_list'>
                <h5 className='footer_menu_title'>Legal</h5>
                <a className='footer_menu_item' href="">Terms</a>
                <a className='footer_menu_item' href="">Privacy</a>
            </div> */}
        </div>
    </footer>
}

export default Footer