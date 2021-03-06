import React, { Component } from 'react';
import '../css/CompanyLogin.css';
import { withRouter,Link } from 'react-router-dom';




const validEmailRegex = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
const validateForm = (errors) => {
  let valid = true
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false))
  return valid
}

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null,
      errors: {
        email: ' ',
        password: ' ',
      },
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    let errors = this.state.errors

    switch (name) {
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!'
        break
      case 'password':
        errors.password =
          value.length < 8 ? 'Password must be 8 characters long!' : ''
        break
      default:
        break
    }

    this.setState({ errors, [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm( this.state.errors)) {
        // if(check query database udate email confired or not){} 
        this.props.history.push('/profile');

        // else{ 
        //   this.props.history.push('/email-notyet-verified')
        // }
    }else{
      console.error('Invalid Form')
    }
  }
  goRegister = (vari) => {
    vari.preventDefault();
    this.props.history.push('/register');
  }
  

  render() {
    const { errors } = this.state
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>L O G I N</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className="ResetPassword">
              <Link to={`/forgot-password`} className="ResetPassword">Forget passowrd</Link><br/>
            </div>
              <button className="btn1" type="submit"  disabled={!this.state.email || !this.state.password} >Login</button>
                <p className="or">----------------------OR----------------------</p>
                <button className="btn2" onClick={this.goRegister} type="button" >Register</button>
          </form>
        </div>

      </div>
    )
  }
}


export default withRouter(Register);
