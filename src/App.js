import React from "react";
//import logo from './logo.svg';
import "./App.css";
//import { WelcomePage } from "./components/WelcomePage";
import { NewAdForm } from "./components/NewAdFrom.js";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NewAdForm></NewAdForm>
    </div>
  );
}

export default App;
