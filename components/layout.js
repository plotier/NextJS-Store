import React from 'react'
import Head from 'next/head'
import style from '../styles/layout.module.css'
import Menu from './menu'

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>Github Merch {title ? `| ${title}` : ""}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu/>
            <div className={style.container}>

                {children}
            </div>

        </div>
    )
}

export default Layout