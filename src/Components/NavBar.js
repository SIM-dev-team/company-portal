import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import pdclogo from '../images/pdc_logo.jpeg'
import CompanyRegistration from './CompanyRegistration';
import CompanyLogin from './CompanyLogin';
import WelcomePage from './WelcomePage';
import Companyprofile from './CompanyProfile';
import CompnayNotification from './CompanyNotification';
import NewAdFrom from './NewAdFrom';
import VerifyMail from './verifyMail';
import NotYetVerified from './notYetVerified'
import ForgotPassword from './ForgotPassword'


class NavBar extends Component{
    render(){
        return (
        <Router>
            {/* <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar"> */}
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#1B1464'}}>
                    <div className="logo01">
                        <img className="ucsc_logo01" src={pdclogo} alt=""></img>
                    <span><Link to={'/'} className="navtext" style={{color:'#dcdde1'}}>Professional Development Center of University of Colombo School of
                                Computing</Link></span>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSup"></div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to = {'/'} className="nav-link" style={{color:'#dcdde1'}}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/login'} className="nav-link" style={{color:'#dcdde1'}}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/register'} className="nav-link" style={{color:'#dcdde1'}}>Register</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path = '/login' component= {CompanyLogin}/>
                    <Route exact path = '/register' component= {CompanyRegistration}/>
                    <Route exact path = '/' component= {WelcomePage}/>
                    <Route exact path = '/profile' component= {Companyprofile}/>
                    <Route exact path = '/notification' component= {CompnayNotification}/>
                    <Route exact path = '/newadd' component = {NewAdFrom}/>
                    <Route exact path = '/email-verify' component = {VerifyMail}/>
                    <Route exact path = '/email-notyet-verified' component = {NotYetVerified}/>
                    <Route exact path = '/forgot-password' component = {ForgotPassword}/>
                </Switch>
        </Router>
        );
    }
}
export default NavBar;

