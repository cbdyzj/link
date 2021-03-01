import React from 'react'

import Head from 'next/head'
import Nav from './nav'


function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title || 'Link'}</title>
            </Head>
            <Nav />
            <hr />
            {props.children}
        </div>
    )
}

export default Layout
