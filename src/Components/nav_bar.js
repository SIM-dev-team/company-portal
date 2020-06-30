import React, { Component } from 'react';
// import { Navbar,Button , Nav, Form, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class NavBar extends Component{
    render(){
        return (
        <Router>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#192a56'}}>
                    <Link to={'/'} className="navbar-brand">UCSC PDC</Link>
                    <div className="collapse navbar-collapse" id="navbarSup"></div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to = {'/'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/login'} className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/register'} className="nav-link">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
        );
    }
}
export default NavBar;

