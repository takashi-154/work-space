import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export default () => (
  <section className="hero is-success is-halfheight">
    <div className="hero-body">
      <div>
        <p className="title py-3">
          <Link to="/">わーくすぺーす（仮）</Link>
        </p>
        <p className="subtitle">
          天体撮影、キャンプ、ソフト開発 etc…
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
  </section>
)
