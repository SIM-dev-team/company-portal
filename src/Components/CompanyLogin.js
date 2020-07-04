import React, { Component } from 'react';
import '../css/CompanyLogin.css';
import { withRouter } from 'react-router-dom';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




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
      this.props.history.push('/profile');
    }else{
      console.error('Invalid Form')
    }
  }
  goRegister = (vari) => {
    vari.preventDefault();
    this.props.history.push('/register');
  }
  

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Welcome</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <FontAwesomeIcon className="userIcn" icon={faUser} />
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <FontAwesomeIcon className="userIcn" icon={faLock} />
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className="ResetPassword">
              <a href="# ">Forget passowrd</a>
            </div>
              <button type="submit"  disabled={!this.state.email || !this.state.password} >Login</button>
              <button onClick={this.goRegister} type="button" >Register</button>
          </form>
        </div>
        </div>
    );
  }
}

export default withRouter(Register);