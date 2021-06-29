import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Head = ({ title, description, slug, image, lang, meta }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                    image
                    twitterUsername
                }
            }
        }
    `)

    const seo = {
        title: title || data.site.siteMetadata.title,
        description: description || data.site.siteMetadata.description,
        //image: `${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.image}`,
        image: image,
        url: `${data.site.siteMetadata.siteUrl}${slug}`,
    }

    return (
        <Helmet
        htmlAttributes={{
            lang,
        }}
        title={seo.title}
        description={seo.description}
        meta={[
            {
            name: `description`,
            content: seo.description,
            },
            {
            name: `image`,
            content: seo.image,
            },
            {
            name: `thumbnail`,
            content: seo.image,
            },
            {
            property: `og:url`,
            content: seo.url,
            },
            {
            property: `og:type`,
            content: `website`,
            },
            {
            property: `og:title`,
            content: seo.title,
            },
            {
            property: `og:description`,
            content: seo.description,
            },
            {
            property: `og:image`,
            content: seo.image,
            },
            {
            name: `twitter:card`,
            content: `summary`,
            },
            {
            name: `twitter:creator`,
            content: data.site.siteMetadata.twitterUsername,
            },
            {
            name: `twitter:title`,
            content: seo.title,
            },
            {
            name: `twitter:description`,
            content: seo.description,
            },
            {
            property: `twitter:image`,
            content: seo.image,
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
    slug: ``,
    image: ``,
}

export default Head;