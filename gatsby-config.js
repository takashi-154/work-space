const path = require(`path`)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    author: 'takashi-154',
    title: 'わーくすぺーす',
    description: `天体撮影、キャンプ、ソフト開発 etc… いろんなことをゆる～くやっていきます。`,
    siteUrl: `https://takashi-154.github.io/work-space/`,
  },
  pathPrefix: '/work-space',
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["UA-200614285-1"],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}