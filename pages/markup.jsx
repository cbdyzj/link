import React from 'react'
import marked from 'marked'
import Layout from '../components/Layout.jsx'

const document = `
# Link

## Start

\`\`\`sh
yarn install --ignore-optional
yarn start
\`\`\`
`

export default function Markup(props) {
    // noinspection HtmlUnknownAttribute
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

export async function getServerSideProps() {
    return {
        props: {
            md: marked(document),
        }
    }
}
