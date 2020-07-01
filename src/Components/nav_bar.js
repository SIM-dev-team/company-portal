import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class NavBar extends Component{
    render(){
        return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            Ucsc 
            </Navbar.Brand>
        </Navbar>
        )
    }
}
export default NavBar;

