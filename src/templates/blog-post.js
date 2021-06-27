import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Head from '../components/head'

const BlogPostTemplate = props => {
  const post = props.data.contentfulBlogPost
  const siteTitle = props.data.site.siteMetadata.title
  const siteDesc = props.data.site.siteMetadata.description

  const image = getImage(post.heroImage)

  return (
    <Layout location={props.location}>
      <div className="">
        <Head 
          title={`${post.title} | ${siteTitle}`} 
          description={`${post.description.description}`} 
        />
        <div>
          <GatsbyImage
            alt={post.title}
            image={image}
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
      description {
        description
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        gatsbyImageData(width: 1180, layout: FULL_WIDTH)
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
