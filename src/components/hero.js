import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {

  return (
    <div className="hero is-halfheight" style={{ display: "grid" }}>
      <StaticImage
        style={{
          gridArea: "1/1",
        }}
        alt=""
        src={
          "../images/hero.jpg"
        }
        formats={["auto", "webp", "avif"]}
      />

      <div className="hero-body"
        style={{
          gridArea: "1/1",
          position: "relative",
          display: "grid",
        }}>
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
    </div>
  )

}

export default Hero;
