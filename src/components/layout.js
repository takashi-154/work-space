import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
import Navigation from './navigation'
import '../css/base.scss'

const Template = ({ location, children }) => {
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navigation />
        {children}
      </Container>
    )
}

export default Template
