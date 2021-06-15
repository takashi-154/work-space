import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return(
    <BackgroundImage className="hero is-halfheight" fluid={imageData}>
    <div className="hero-body">
      <div>
        <p className="title py-3">
          わーくすぺーす
        </p>
        <p className="subtitle has-text-white">
          天体撮影、キャンプ、ソフト開発 etc… いろんなことをゆる～くやっていきます。
        </p>
      </div>
    </div>
    <div className="hero-foot">
      <nav className="tabs is-centered is-boxed is-fullwidth">
        <ul>
          <li><a>天体撮影</a></li>
          <li><a>キャンプ</a></li>
          <li><a>ソフト開発</a></li>
          <li><a>その他</a></li>
        </ul>
      </nav>
    </div>
  </BackgroundImage>
  )

}
