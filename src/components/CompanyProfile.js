import React, { Component } from 'react'
//import company_logo from '../images/company_logo.png'
import company_ex from '../images/company_logo_ex.jpg'
import '../css/mycustom.css'
import { Image } from 'react-bootstrap'

class CompanyProfile extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 mt-lg-5">
              <Image
                className="company_logo"
                src={company_ex}
                roundedCircle
                alt="Avatar"
              ></Image>
            </div>
            <div className="col-lg-8 mt-xl-3  ">
              <div className="company_name_align">
                <h4>Software Company Name</h4>
              </div>

              <div>
                <div className="jumbotron">
                  <p> Description goes here</p>
                </div>
                <a href="www.softwarecompany.com" className="link_align">
                  www.softwarecompany.com
                </a>
              </div>
              <div className="row-cols-xl  btn-align mt-2">
                <button
                  type="button"
                  className="edit-btn "
                  style={{ outline: 'none' }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-xl-5">
            <div className="col-2 xs-12">
              <button
                type="button"
                className="notification-btn btn-block"
                style={{ outline: 'none' }}
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
                type="button"
                className="new_ad-btn btn-block "
                style={{ outline: 'none' }}
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
      </div>
    )
  }
}

export default CompanyProfile
