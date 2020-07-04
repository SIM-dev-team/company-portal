import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CompanyRegistration from './CompanyRegistration'
import CompanyLogin from './CompanyLogin'
import WelcomePage from './WelcomePage'
import Companyprofile from './CompanyProfile'
import CompnayNotification from './CompanyNotification'
import NewAdFrom from './NewAdFrom'
import VerifyMail from './verifyMail'
import NotYetVerified from './notYetVerified'
import pdc_logo from '../images/pdc_logo.jpeg'
import { Image } from 'react-bootstrap'
import '../css/mycustom.css'
class NavBar extends Component {
  render() {
    return (
      <Router>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: '#021561' }}
        >
          <Image className="header_image" src={pdc_logo}></Image>
          <Link to={'/'} className="navbar-brand" style={{ color: '#c8d6e5' }}>
            Professional Development Center of University of Colombo School of
            Computing
          </Link>
          <div className="collapse navbar-collapse" id="navbarSup"></div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link" style={{ color: '#c8d6e5' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={'/login'}
                className="nav-link"
                style={{ color: '#c8d6e5' }}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={'/register'}
                className="nav-link"
                style={{ color: '#c8d6e5' }}
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/login" component={CompanyLogin} />
          <Route exact path="/register" component={CompanyRegistration} />
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/profile" component={Companyprofile} />
          <Route exact path="/notification" component={CompnayNotification} />
          <Route exact path="/newadd" component={NewAdFrom} />
          <Route exact path="/email-verify" component={VerifyMail} />
          <Route
            exact
            path="/email-notyet-verified"
            component={NotYetVerified}
          />
        </Switch>
      </Router>
    )
  }
}
export default NavBar
