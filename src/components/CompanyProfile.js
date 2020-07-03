import React from 'react'
import company_logo from '../images/company_logo.png'
import '../css/mycustom.css'

export const Companyprofile = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-3">
        <img className="company_logo" src={company_logo} alt="Avatar"></img>
      </div>
      <div className="col-lg-8 mt-xl-3  ">
        <div className="company_name_align">
          <h4>Software Company Name</h4>
        </div>
        <div className="jumbotron">
          <p>The Company description goes here</p>
          <a href="www.softwarecompany.com" className="link_align">
            www.softwarecompany.com
          </a>
        </div>
        <div className="row-cols-xl  btn-align mt-0">
          <button
            type="button"

            className="edit-btn "
            style={({ outline: 'none' }, { outlineColor: '#d5edf5' })}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-2">
        <button
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
        <button type="button" className="new_ad-btn btn-block " style={{}}>
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
export default Companyprofile;