import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Head from '../components/head'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

const SoftwareIndex = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const siteDescription = props.data.site.siteMetadata.description
  const posts = props.data.allContentfulBlogPost.edges

  return (
    <Layout location={props.location}>
      <div className="">
        <Head 
          title={`ソフト開発 | ${siteTitle}`} 
          description={`投稿されたソフト開発記事の一覧ページです`}
        />
        <Hero />
        <div className="container is-fluid py-6">
          <h1 className="notification title is-4">ソフト開発 記事一覧</h1>
          <ul className="columns is-multiline">
            {posts.map(({ node }) => {
              return (
                <li className="column is-one-third-desktop is-half-tablet is-full-mobile" key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default SoftwareIndex

export const pageQuery = graphql`
  query SoftwareIndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      filter: { tags: {in: "Software"} }
      ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            gatsbyImageData(width: 350, height: 196, layout: FULL_WIDTH)
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
