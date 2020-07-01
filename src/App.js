
import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { WelcomePage } from "./components/WelcomePage";

import React from 'react';
import Register from './Components/company_login'
import NavBar from './Components/nav_bar'


function App() {
  return (
    <div className="App">

      <WelcomePage></WelcomePage>

      <NavBar/>
      <Register/>

    </div>
  );
}

export default App;
