import React, { Component } from 'react'
import '../css/CompanyRegistration.css'
import { withRouter } from 'react-router-dom'

// eslint-disable-next-line
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
)
const validateForm = (errors) => {
  let valid = true
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false))
  return valid
}

const countErrors = (errors) => {
  let count = 0
  Object.values(errors).forEach((val) => val.length > 0 && (count = count + 1))
  return count
}

class CompanyRegistration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValid: false,
      errorCount: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
        description: '',
        regNo: '',
        contact: '',
        available: '',
        address: '',
        date: '',
        employee: '',
        pm: '',
        techlead: '',
        confirm: '',
      },
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    let errors = this.state.errors

    switch (name) {
      case 'fullName':
        errors.fullName =
          // eslint-disable-next-line
          value == '' ? 'Company name is Required!' : ''
        break
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!'
        break
      case 'password':
        errors.password =
          value.length < 8 ? 'Password must be 8 characters long!' : ''
        break
      case 'description':
        errors.description =
          // eslint-disable-next-line
          value == '' ? 'Company description is Required!' : ''
        break
      case 'regNo':
        errors.regNo =
          // eslint-disable-next-line
          value == '' ? 'Company registration number is Required!' : ''
        break
      case 'contact':
        errors.contact =
          value.length < 10 ? 'Valid Contact number is Required!' : ''
        break
      case 'address':
        errors.address =
          // eslint-disable-next-line
          value == '' ? 'Current Address is Required!' : ''
        break
      case 'date':
        errors.date =
          // eslint-disable-next-line
          value == '' ? 'Date of Company Establishment is Required!' : ''
        break
      case 'employee':
        errors.employee =
          // eslint-disable-next-line
          value == '' ? 'Current Number of Employees is Required!' : ''
        break
      case 'pm':
        errors.pm =
          // eslint-disable-next-line
          value == '' ? 'Current Number of Project Managers is Required!' : ''
        break
      case 'techlead':
        errors.techlead =
          // eslint-disable-next-line
          value == '' ? 'Current Number of Tech Leads is Required!' : ''
        break
      case 'confirm':
        errors.confirm =
          // eslint-disable-next-line
          value != this.state.password ? 'Password do not match!' : ''
        break

      default:
        break
    }

    this.setState({ errors, [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ formValid: validateForm(this.state.errors) })
    this.setState({ errorCount: countErrors(this.state.errors) })
  }

  cancelCourse = (e) => {
    e.preventDefault()
    document.getElementById('reg').reset()
    this.props.history.push('/login')
  }

  render() {
    const { errors, formValid } = this.state
    return (
      <div className='wrapper01'>
        <div className='form-wrapper01'>
          <h2>Register Your Company</h2>
          <form id="reg" onSubmit={this.handleSubmit}>
            <div className="fullName">
              <label htmlFor="fullName">Organization/ Company</label>
              <input
                required
                type="text"
                name="fullName"
                onChange={this.handleChange}
              />
              {errors.fullName.length > 0 && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>
            <div className="description">
              <label htmlFor="description">Company Description</label>
              <textarea
                required
                name="description"
                onChange={this.handleChange}
              />
              {errors.description.length > 0 && (
                <span className="error">{errors.description}</span>
              )}
            </div>
            <div className="website">
              <label htmlFor="website">Website</label>
              <input type="url" name="website" onChange={this.handleChange} />
            </div>
            <div className="form-row">
              <div className="date form-group col-6">
                <label htmlFor="date">Date of Establishment</label>
                <input
                  required
                  type="date"
                  name="date"
                  onChange={this.handleChange}
                />
                {errors.date.length > 0 && (
                  <span className="error">{errors.date}</span>
                )}
              </div>
              <div className="regNo form-group col-6">
                <label htmlFor="regNo">Company Registration Number</label>
                <input
                  required
                  type="text"
                  name="regNo"
                  onChange={this.handleChange}
                />
                {errors.regNo.length > 0 && (
                  <span className="error">{errors.regNo}</span>
                )}
              </div>
            </div>

            <div className="address">
              <label htmlFor="address">Current Address</label>
              <input
                required
                type="text"
                name="address"
                onChange={this.handleChange}
              />
              {errors.address.length > 0 && (
                <span className="error">{errors.address}</span>
              )}
            </div>
            <div className="partners">
              <label htmlFor="partners">Partners(If any)</label>
              <input type="text" name="partners" onChange={this.handleChange} />
            </div>
            <div className="clients">
              <label htmlFor="clients">Clients(Optional)</label>
              <input type="text" name="partners" onChange={this.handleChange} />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                name="email"
                onChange={this.handleChange}
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="contact">
              <label htmlFor="contact">Contact</label>
              <input
                type="telephone"
                name="contact"
                onChange={this.handleChange}
              />
              {errors.contact.length > 0 && (
                <span className="error">{errors.contact}</span>
              )}
            </div>

            <div className="form-row">
              <div className="employee form-group col-4">
                <label htmlFor="employee">Number of Employees</label>
                <input
                  required
                  type="number"
                  name="employee"
                  onChange={this.handleChange}
                />
                {errors.employee.length > 0 && (
                  <span className="error">{errors.employee}</span>
                )}
              </div>
              <div className="pm form-group col-4">
                <label htmlFor="pm">Number of Project Managers</label>
                <input
                  required
                  type="number"
                  name="pm"
                  onChange={this.handleChange}
                />
                {errors.pm.length > 0 && (
                  <span className="error">{errors.pm}</span>
                )}
              </div>
              <div className="techlead form-group col-4">
                <label htmlFor="techlead">Number of Tech Leads</label>
                <input
                  required
                  type="number"
                  name="techlead"
                  onChange={this.handleChange}
                />
                {errors.techlead.length > 0 && (
                  <span className="error">{errors.techlead}</span>
                )}
              </div>
            </div>

            <div className="available">
              <label htmlFor="available">
                Specify whether the company/organization has been offered
                industry placement for any other universities/educational
                institutes before.
              </label>
              <label className="form-check form-check-inline">
                <input
                  required
                  className="form-check-input"
                  type="radio"
                  name="available"
                  value="yes"
                  onChange={this.handleChange}
                />
                <span className="form-check-label"> Yes</span>
              </label>
              <label className="form-check form-check-inline">
                <input
                  required
                  className="form-check-input"
                  type="radio"
                  name="available"
                  value="no"
                  onChange={this.handleChange}
                />
                <span className="form-check-label"> No</span>
              </label>
              {errors.available.length > 0 && (
                <span className="error">{errors.available}</span>
              )}
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="confirm">
              <label htmlFor="confirm">Confirm Password</label>
              <input
                required
                type="password"
                name="confirm"
                onChange={this.handleChange}
              />
              {errors.confirm.length > 0 && (
                <span className="error">{errors.confirm}</span>
              )}
            </div>
            <div className="bttn row">
              <div className="cancel col-6">
                <button
                  className="cancelbttn btn btn-danger"
                  onClick={this.cancelCourse}
                >
                  Cancel
                </button>
              </div>
              <div className="submit col-6">
                <button type="submit" className="registerbttn btn btn-primary">
                  Submit
                </button>
              </div>
            </div>

            <p className="form-status">
              <br />
              Form is {formValid ? 'valid ✅' : 'invalid ❌'}
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(CompanyRegistration)
