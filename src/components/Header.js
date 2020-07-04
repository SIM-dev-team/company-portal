import React from 'react'
import '../css/mycustom.css'
import { Image } from 'react-bootstrap'
import logo from '../images/ucsc_logo.jpeg'

const Header = () => (
  <div className="Header_ucsc">
    <Image className="header_image" src={logo}></Image>
    <header className="ml-3">
      Professional Development Center of University of Colombo School of
      Computing
    </header>
  </div>
)

export default Header
