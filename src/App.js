import React from 'react'
//import logo from './logo.svg';
import './App.css'
//import { WelcomePage } from "./components/WelcomePage";
import { NewAdForm } from './components/NewAdFrom.js'
import { Header } from './components/Header'

import Register from './Components/company_login'
import NavBar from './Components/nav_bar'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NewAdForm></NewAdForm>

      <NavBar />
      <Register />
    </div>
  )
}

export default App
