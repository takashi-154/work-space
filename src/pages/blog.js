import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

const BlogIndex = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.allContentfulBlogPost.edges

  return (
    <Layout location={props.location}>
      <div className="has-background-white">
        <Helmet title={siteTitle} />
        <Hero />
        <div className="container is-fluid py-6">
          <h1 className="notification title is-4">Recent articles</h1>
          <ul className="columns">
            {posts.map(({ node }) => {
              return (
                <li className="column" key={node.slug}>
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

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
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
