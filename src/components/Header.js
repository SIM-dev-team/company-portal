import React, { Component } from 'react'
import '../css/mycustom.css'
import { Image } from 'react-bootstrap'
import pdc_logo from '../images/pdc_logo.jpeg'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedin: false,
    }
  }

  render() {
    return this.state.loggedin ? (
      <div className="Header_ucsc">
        <Image className="header_image" src={pdc_logo}></Image>
        <header className="ml-3">
          Professional Development Center of University of Colombo School of
          Computing
        </header>
        <button variant="link" className="logout-btn">
          Log out
        </button>
      </div>
    ) : (
      <div className="Header_ucsc">
        <Image className="header_image" src={pdc_logo}></Image>
        <header className="ml-3">
          Professional Development Center of University of Colombo School of
          Computing
        </header>
      </div>
    )
  }
}

export default Header
