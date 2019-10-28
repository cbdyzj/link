import React from 'react'
import Layout from '../components/layout'
import marked from 'marked'

import doc from '../README.md'

function Markup(props) {
    return (
        <Layout title="Markup">
            <div className="content"
                 dangerouslySetInnerHTML={{ __html: props.md }}/>
            <style jsx>{`
                .content {
                    margin: 60px;
                }
            `}</style>
        </Layout>
    )
}

Markup.getInitialProps = async function (req) {
    return {
        md: marked(doc),
    }
}

export default Markup
