import React, {useState} from 'react'
import { Link } from 'gatsby'

export default () => {
  const [isActive, setisActive] = useState(false);

  return(
    <nav className="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          onClick={() => {
            setisActive(!isActive)
          }} 
          role="button" 
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} 
          aria-label="menu" 
          aria-expanded="false" 
          data-target="globalMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="globalMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>

          <Link className="navbar-item" to="/blog/">記事一覧</Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">
              タグ一覧
            </span>

            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/astrograph/">
                天体撮影
              </Link>
              <Link className="navbar-item" to="/camp/">
                キャンプ
              </Link>
              <Link className="navbar-item" to="/software/">
                ソフト開発
              </Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item" to="/others/">
                その他
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <Link className="button social-icon is-twitter" target="_blank" to="https://twitter.com/Mazic_tell_Arts" rel="noreferrer">
                  <span className="icon is-medium">
                    <i className="fab fa-twitter fa-lg"></i>
                  </span>
                </Link>
              </p>
              <p className="control">
                <Link className="button social-icon is-github" target="_blank" to="https://github.com/takashi-154" rel="noreferrer">
                  <span className="icon is-medium">
                    <i className="fab fa-github fa-lg"></i>
                  </span>
                </Link>
              </p>
              <p className="control">
                <Link className="button social-icon is-facebook" target="_blank" to="https://www.facebook.com/profile.php?id=100069240847936" rel="noreferrer">
                  <span className="icon is-medium">
                    <i className="fab fa-facebook fa-lg"></i>
                  </span>
                </Link>
              </p>
              <p className="control">
                <Link className="button social-icon is-instagram" target="_blank" to="https://www.instagram.com/mazic_arts/" rel="noreferrer">
                  <span className="icon is-medium">
                    <i className="fab fa-instagram fa-lg"></i>
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}
