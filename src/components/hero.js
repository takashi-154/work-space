import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return(
    <BackgroundImage Tag="section" className="hero is-halfheight" fluid={imageData}>
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
            <li><Link to="/astrograph/">天体撮影</Link></li>
            <li><Link to="/camp/">キャンプ</Link></li>
            <li><Link to="/software/">ソフト開発</Link></li>
            <li><Link to="/others/">その他</Link></li>
          </ul>
        </nav>
      </div>
    </BackgroundImage>
  )

}

export default Hero;
