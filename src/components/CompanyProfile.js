import React, { Component } from 'react'
import '../css/mycustom.css'
import EdiText from 'react-editext'
import { withRouter } from 'react-router-dom'
import company_ex from '../images/company_logo_ex.jpg'
import { Image } from 'react-bootstrap'

class Companyprofile extends Component {
  onSave = (val) => {
    console.log('Edited Value -> ', val)
  }
  goNotification = (e) => {
    e.preventDefault()
    this.props.history.push('/notification')
  }
  goNewAdd = (v) => {
    v.preventDefault()
    this.props.history.push('/newadd')
  }

  render() {
    return (
      <div className="container-fluid mt-4">
        <div className="row">
          <button className="backbtn" onClick={this.props.history.goBack}>
            Back
          </button>
          <div className="col-lg-2">
            <Image
              className="company_logo "
              src={company_ex}
              roundedCircle
              alt="Avatar"
            ></Image>
          </div>
          <div className="col-lg-8 mt-xl-2 ">
            <div className="company_name_align">
              <h4>Software Company Name</h4>
            </div>
            <div className="jumbotron mr-4">
              <div className="container">
                <EdiText
                  type="textarea"
                  inputProps={{
                    className: 'textarea',
                    placeholder: 'Type your content here',
                    style: {
                      outline: 'none',
                      minWidth: '80%',
                    },
                    rows: 5,
                  }}
                  value="How do you define real? If you're talking about what you can feel, what you can smell,
              what you can taste and see, then real is simply electrical signals interpreted by your brain"
                  onSave={this.onSave}
                />
              </div>
              <a href="www.softwarecompany.com" className="link_align">
                www.softwarecompany.com
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <button
              onClick={this.goNotification}
              type="button"
              className="notification-btn btn-block"
              style={{ outlineColor: '#1b85a6' }}
            >
              Notifications
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              className=" advert-btn btn-block "
              style={{ outline: 'none' }}
            >
              Adverts
            </button>
          </div>
        </div>
        <div className="row-cols-xl ">
          <div className="col-2 btn-align ">
            <button
              onClick={this.goNewAdd}
              type="button"
              className="new_ad-btn btn-block "
              style={{}}
            >
              Create new advert
            </button>
          </div>
        </div>
        <div className="row-cols-xl mt-5">
          <div className=" jumbotron">
            <div className="container">
              <h5>Posted Ads goes here as cards</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Companyprofile)
