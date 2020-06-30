import React from 'react';
import Register from './Components/company_login'
// import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import  NavBar from './Components/nav_bar';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {  Navbar,Row,Container , Nav, Col, Form, FormControl } from 'react-bootstrap';



function App() {
  return (
    <div className="row">
      <NavBar/>
      <Register/>
    </div>
  );
}

export default App;
