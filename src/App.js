import React from 'react'
//import logo from './logo.svg';
import './App.css'
import { WelcomePage } from './Components/WelcomePage'
import Register from './Components/company_login'
import NavBar from './Components/nav_bar'
import CompanyRegistration from './Components/CompanyRegistration'
import Companyprofile from './Components/CompanyProfile'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Companyprofile />
    </div>
  )
}

export default App
