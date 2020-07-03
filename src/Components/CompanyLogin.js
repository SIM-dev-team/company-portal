import React, { Component } from 'react';
import '../css/CompanyLogin.css';
import { Route, BrowserRouter, useHistory } from 'react-router-dom';
import CompanyRegistration from './CompanyRegistration';


const validEmailRegex = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      errors: {
        email: ' ',
        password: ' ',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'email': 
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'password': 
        errors.password =  value.length < 8 ? 'Password must be 8 characters long!' : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm( this.state.errors)) {
      console.info('Valid form')
    }else{
      console.error('Invalid Form')
    }
  }
  

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>L O G I N</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className="ResetPassword">
              <a href="# ">Forget passowrd</a>
            </div>
              <button type="submit"  disabled={!this.state.email || !this.state.password} >Login</button>
              <button type="button" >Register</button>
          </form>
        </div>
        <div>
          <Route exact path = '/register' component= {CompanyRegistration} />
        </div>
      </div>
    );
  }
}

export default Register;