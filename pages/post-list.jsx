import React from 'react'
import Layout from '../components/Layout.jsx'

export default function PostList() {
    // noinspection HtmlUnknownAttribute
    return (
        <Layout title="Post List">
            <h2 className="title">Post List</h2>
            <table className="post-list">
                <thead>
                <tr>
                    <th>Post</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><a href={'/post/1'}>Post 1</a></td>
                    <td>2019-09-28</td>
                </tr>
                <tr>
                    <td><a href={'/post/2'}>Post 2</a></td>
                    <td>2019-09-28</td>
                </tr>
                </tbody>
            </table>
            < style jsx> {`
              .title {
                margin: 0;
                text-align: center;
                width: 100%;
                padding-top: 40px;
                line-height: 1.15;
              }

              .post-list {
                width: 75%;
                max-width: 600px;
                margin: 24px auto;
                text-align: center;
                font-size: 11px;
                color: #333333;
                border-width: 1px;
                border-color: #666;
                border-collapse: collapse;
              }

              .post-list th {
                border-width: 1px;
                padding: 8px;
                border-style: solid;
                border-color: #666;
                background-color: #dedede;
              }

              .post-list td {
                border-width: 1px;
                padding: 8px;
                border-style: solid;
                border-color: #666;
                background-color: #fff;
              }
            `}</style>
        </Layout>
    )
}

