import React, { Component } from 'react'
import company_logo from '../images/company_logo.png'
import '../css/mycustom.css'
import EdiText from 'react-editext'
import { withRouter } from 'react-router-dom';


class CompnayNotification extends Component {

  onSave = val => {
    console.log('Edited Value -> ', val)
  }
  goProfile = (e)=>{
    e.preventDefault();
    this.props.history.push('/profile');
  }
  goNewAdd = (v)=> {
    v.preventDefault();
    this.props.history.push('/newadd')
  }




  render(){
    return(

      <div className="container-fluid">
    <div className="row">
            <button className="backbtn" onClick={this.props.history.goBack}>Back</button>
      <div className="col-lg-3">
        <img className="company_logo" src={company_logo} alt="Avatar"></img>
      </div>
      <div className="col-lg-8 mt-xl-3  ">
        <div className="company_name_align">
          <h4>Software Company Name</h4>
        </div>
        <div className="jumbotron">
        
        <div className="container">
          <EdiText
              type='textarea'
              inputProps={{
                className: 'textarea',
                placeholder: 'Type your content here',
                style: {
                  outline: 'none',
                  minWidth: '80%'
                },
                rows: 5
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
          type="button"
          className="notification-btn btn-block"
          style={{ outlineColor: '#1b85a6' }}
        >
          Notifications
        </button>
      </div>
      <div className="col-2">
        <button
        onClick={this.goProfile}
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
        <button onClick={this.goNewAdd} type="button" className="new_ad-btn btn-block " style={{}}>
          Create new advert
        </button>
      </div>
    </div>
    <div className="row-cols-xl mt-5">
      <div className=" jumbotron">
        <div className="container">
          <h5>Notifications are here</h5>
        </div>
      </div>
    </div>
  </div>

    )
  }
}

export default withRouter(CompnayNotification);