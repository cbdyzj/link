import React from 'react'
import Head from 'next/head'
import Nav from './Nav'

export default function Layout(props) {
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
