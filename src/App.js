import React from 'react'
//import logo from './logo.svg';
import './App.css'
//import { WelcomePage } from './components/WelcomePage'
//import { NewAdForm } from './components/NewAdFrom.js'
import { Header } from './components/Header'

//import Register from './components/company_login'
//import NavBar from './components/nav_bar'
import { Companyprofile } from './components/CompanyProfile'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Companyprofile></Companyprofile>
    </div>
  )
}

export default App
