import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Head from '../components/head'
import Share from '../components/share'
import Pagination from '../components/pagination'

const BlogPostTemplate = props => {
  const post = props.data.contentfulBlogPost
  const siteTitle = props.data.site.siteMetadata.title
  const siteDescription = props.data.site.siteMetadata.description
  const siteUrl = props.data.site.siteMetadata.siteUrl

  const edges = props.data.allContentfulBlogPost.edges
  const posts = edges.find((e) => e.node.id === post.id)
  const nextPost = posts.previous
  const previousPost = posts.next

  const image = getImage(post.heroImage)


  return (
    <Layout location={props.location}>
      <div className="">
        <Head 
          title={`${post.title} | ${siteTitle}`} 
          description={`${post.description.description}` || siteDescription} 
          slug={`/blog/${post.slug}`}
          image={`https:${image.images.fallback.src}`}
        />
        <div className="has-text-centered">
          <GatsbyImage
            alt={post.title}
            image={image}
          />
        </div>
        <div className="container is-fluid py-6">
          <h1 className="title is-2">{post.title}</h1>
          <p className="subtitle is-5">{post.publishDate}</p>
          <div className="tags mb-5">
          {post.tags &&
            post.tags.map(tag => (
              <p className="tag is-info is-light" key={tag}>
                {tag}
              </p>
            ))}
          </div>
          <div className="message">
            <div className="message-header">
              <p>目次</p>
            </div>
            <div className="message-body">
              <aside className="menu" dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.tableOfContents }} />
            </div>
          </div>
          <div className="content">
            <div 
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
        <Share title={`${post.title} | ${siteTitle}`} articleUrl={`${siteUrl}/blog/${post.slug}`} />
        <Pagination next={nextPost} previous={previousPost} />
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
        siteUrl
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      description {
        description
      }
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      tags
      heroImage {
        gatsbyImageData(height: 640, layout: CONSTRAINED)
      }
      body {
        childMarkdownRemark {
          html
          tableOfContents
        }
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      ) {
      edges {
        next {
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
        node {
          id
          slug
        }
        previous {
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
