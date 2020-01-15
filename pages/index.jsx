import React from 'react'
import Layout from '../components/layout'
import redirectPatterns from '../config/redirect_patterns'

function Index(props) {
    return (
        <Layout>
            <div className='hero'>
                <h1 className='title'>Hello Link!</h1>
                <p className='description'>
                    Link🔗：连接万物
                </p>

                <div className='row'>
                    <a href={'/post-list'} className='card'>
                        <h3>文章列表 &rarr;</h3>
                        <p>一些文章。</p>
                    </a>
                    <a href='https://nextjs.org/docs' className='card'>
                        <h3>Documentation &rarr;</h3>
                        <p>Learn more about Next.js in the documentation.</p>
                    </a>
                </div>
            </div>

            <style jsx>{`
            .hero {
                width: 100%;
                color: #333;
            }
            .title {
                margin: 0;
                width: 100%;
                padding-top: 80px;
                line-height: 1.15;
                font-size: 48px;
            }
            .title,
            .description {
                text-align: center;
            }
            .row {
                max-width: 880px;
                margin: 80px auto 40px;
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            .card {
                padding: 18px 18px 24px;
                width: 220px;
                margin: 0 1%;
                text-align: left;
                text-decoration: none;
                color: #434343;
                border: 1px solid #9b9b9b;
            }
            .card:hover {
                border-color: #067df7;
            }
            .card h3 {
                margin: 0;
                color: #067df7;
                font-size: 18px;
            }
            .card p {
                margin: 0;
                padding: 12px 0 0;
                font-size: 13px;
                color: #333;
            }
            `}</style>
        </Layout>
    )
}

Index.getInitialProps = async (ctx) => {
    if(!ctx.req){
        return { name: 'link' }
    }
    const { req, res } = ctx
    const { host } = req.headers
    for (const pattern of redirectPatterns) {
        if (pattern.pattern.test(host)) {
            res.setHeader('Location', pattern.to);
            res.statusCode = 302
            res.end()
            return
        }
    }
    return { name: 'link' }
}

export default Index
