const path = require(`path`)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
}

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
    image: `/icon.png`,
    twitterUsername: `@Mazic_tell_Arts`, 
  },
  pathPrefix: '/work-space',
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`, 
            options: {
              offsetY: `200`,
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://takashi-154.github.io/work-space/',
        sitemap: 'https://takashi-154.github.io/work-space/sitemap/sitemap-0.xml',
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://takashi-154.github.io/work-space/`,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ['G-BMVHSDB5PX'],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
