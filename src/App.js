import React from 'react';
import Register from './Components/company_login'
import  NavBar from './Components/nav_bar';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="row">
      <NavBar/>
      <Register/>
    </div>
  );
}

export default App;
