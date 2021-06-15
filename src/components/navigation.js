import React, {useState} from 'react'
import { Link } from 'gatsby'

export default () => {
  const [isActive, setisActive] = useState(false);

  return(
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
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

          <Link className="navbar-item" to="/blog/">Blog</Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                About
              </a>
              <a className="navbar-item">
                Jobs
              </a>
              <a className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
