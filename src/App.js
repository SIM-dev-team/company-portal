
import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { WelcomePage } from "./Components/WelcomePage";
import Register from './Components/company_login';
import NavBar from './Components/nav_bar';
import CompanyRegistration from "./Components/CompanyRegistration";


function App() {
  return (
    <div className="App">

      {/* <WelcomePage></WelcomePage> */}
      
      <NavBar/>
      <CompanyRegistration/>
      {/* <Register/> */}

    </div>
  );
}

export default App;
