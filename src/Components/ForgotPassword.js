import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'
import { withRouter,Link } from 'react-router-dom';

const validEmailRegex = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
const validateForm = (errors) => {
  let valid = true
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false))
  return valid
}

class ForgotPassword extends Component {
    constructor(props) {
      super(props)
      this.state = {
        email: null,
        errors: {
          email: ' '
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
          default:
            break
        }
    
        this.setState({ errors, [name]: value })
      }
      handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm( this.state.errors)) {
            alert('Please check your email!')
            event.target.reset();
        }else{
          alert('Invalid email')
        }
      }



      render(){
          const {errors} = this.state
    return (
        <div className="wrapper">
        <div className="form-wrapper01">
          <h2>Forget Your Password?</h2>
          <p className="fpw01">Please enter your email address bellow and we'll send code into your email</p>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email01">
              <input
                placeholder="Enter your email"
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
              <button className="btn01" type="submit"  disabled={!this.state.email} >Send Code</button>
              <br/>
              <div className="backlogin">
              <Link to={`/login`} className="backlogin">Back To Login</Link><br/>
            </div>
          </form>
        </div>

      </div>
    )
}
}

export default withRouter(ForgotPassword)
