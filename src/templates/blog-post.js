import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Head from '../components/head'

const BlogPostTemplate = props => {
  const post = props.data.contentfulBlogPost
  const siteTitle = props.data.site.siteMetadata.title
  const siteDesc = props.data.site.siteMetadata.description

  return (
    <Layout location={props.location}>
      <div className="">
        <Head 
          title={`${post.title} | ${siteTitle}`} 
          description={`${post.description} | ${siteDesc}`} 
          image={post.heroImage.fluid}
        />
        <div>
          <Img
            alt={post.title}
            fluid={post.heroImage.fluid}
          />
        </div>
        <div className="container is-fluid py-6">
          <h1 className="title is-2">{post.title}</h1>
          <p className="subtitle is-5">{post.publishDate}</p>
          <div className="content">
            <div 
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
