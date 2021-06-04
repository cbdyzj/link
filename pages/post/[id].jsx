import React from 'react'
import Layout from '../../components/layout'

function Post(props) {

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

Post.getInitialProps = async function (req) {
    const { id } = req.query
    return { id }
}

export default Post
