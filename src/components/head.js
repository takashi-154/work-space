import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Head = ({ title, description, lang, meta }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                }
            }
        }
    `)

    return (
        <Helmet
        htmlAttributes={{
            lang,
        }}
        title={`${title}`}
        description={`${description}`}
        meta={[
            {
            name: `description`,
            content: description,
            },
            {
            name: `twitter:card`,
            content: `summary`,
            },
            {
            name: `twitter:creator`,
            content: data.site.siteMetadata.author,
            },
            {
            property: `og:image`,
            content: `${data.site.siteMetadata.siteUrl}/images/icon.png`,
            },
            {
            property: `og:title`,
            content: title,
            },
            {
            property: `og:description`,
            content: description,
            },
            {
            property: `og:type`,
            content: `website`,
            },
            {
            name: `thumbnail`,
            content: `${data.site.siteMetadata.siteUrl}/images/icon.png`,
            },
            {
            name: `twitter:title`,
            content: title,
            },
            {
            name: `twitter:description`,
            content: description,
            },
            {
            property: `og:type`,
            content: `website`,
            },
        ]}
        />
    )
}

Head.defaultProps = {
    lang: `ja`,
    meta: [],
    title: `わーくすぺーす`,
    description: `天体撮影、キャンプ、ソフト開発 etc… いろんなことをゆる～くやっていきます。`,
}

export default Head;