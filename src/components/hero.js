import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, width: 1920, layout: CONSTRAINED)
          }
        }
      }
    `
  )

  const imageData = getImage(data.desktop.childImageSharp)

  return(
    <BgImage Tag="section" className="hero is-halfheight" image={imageData}>
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
    </BgImage>
  )

}

export default Hero;
