import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default ({ article }) => {

  const image = getImage(article.heroImage)

  return(
    <div className="card">
    <Link to={`/blog/${article.slug}`}>
      <GatsbyImage className="card-image" alt="" image={image} />
    </Link>
    <div className="card-content">
      
      <div className="media">
        <div className="media-content">
          <h3 className="title is-4">
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>
          <h4 className="subtitle is-6">{article.publishDate}</h4>
        </div>
      </div>

      <div className="content">
        <div
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
        <div className="tags my-2">
        {article.tags &&
          article.tags.map(tag => (
            <p className="tag is-info is-light" key={tag}>
              {tag}
            </p>
          ))}
        </div>
      </div>

    </div>
  </div>
  )
}
