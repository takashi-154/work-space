import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Head from '../components/head'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

const RootIndex = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const siteDescription = props.data.site.siteMetadata.description
  const posts = props.data.allContentfulBlogPost.edges
  const [author] = props.data.allContentfulPerson.edges

  return (
    <Layout location={props.location}>
      <div className="">
        <Head 
          title={siteTitle} 
          description={siteDescription} 
        />
        <Hero />
        <div className="container is-fluid py-6">
          <h1 className="notification title is-4">インフォメーション</h1>
          <article className="message mb-6">
            <div className="message-body">
              現在いろいろ整備中…暫定的に公開です。
            </div>
          </article>
          <h1 className="notification title is-4">投稿記事一覧</h1>
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

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            gatsbyImageData(width: 1180, height: 480, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
