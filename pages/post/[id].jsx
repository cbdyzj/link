import React from 'react'
import Layout from '../../components/Layout.jsx'

export default function Post(props) {
    // noinspection HtmlUnknownAttribute
    return (
        <Layout title={`Link：${props.id}`}>
            <div className="post">
                <h2>Post: {props.id}</h2>
                <p>Post: {props.id}</p>
            </div>
            <style jsx>{`
              .post {
                margin: 30px;
                text-align: center;
              }
            `}</style>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const { id } = ctx.query
    return {
        props: {
            id,
        },
    }
}

