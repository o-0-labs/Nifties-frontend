import React from 'react'
import Header from "./Header"
import Footer from "./Footer"

interface IProps {
    children: React.ReactNode | Element;
}
const Layout = (props: IProps) => {
    return <>
        <Header />
        {props.children}
        <Footer />
    </>
}

export default Layout