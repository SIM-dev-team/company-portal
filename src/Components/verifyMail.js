import React, { Component } from 'react'
import { Card,  Form } from 'react-bootstrap'
import company_logo_ex from '../images/company_logo_ex.jpg'
import { withRouter } from 'react-router-dom';

class VerifyMail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Comp_name: 'Company',
      Imgsrc: company_logo_ex,
    }
  }

  checkCode=(x) => {
    x.preventDefault();
    // if(check correct code ? true){}
    this.props.history.push('/login');
    // update database confirm code  <--------- 

    // else{}
    // alert('Invalid code') <--- if qury wrong
  }

  render() {
    return (
      <div>
        <div className="container ">
          <div>
            <Card className="jumbotron text-center">
              {/* <div className="row">
                <Image
                  src={this.state.Imgsrc}
                  roundedCircle
                  className="img_size_verifymail"
                ></Image>
                <div className="col">
                  <h4 className="verifyMail_header">
                    Hello," {this.state.Comp_name} "
                  </h4>
                </div>
              </div> */}

              <Card.Text className="mt-4" style={{ fontSize: 18 }}>
                To Complete the your registration ,please verify your email
              </Card.Text>
              <Form>
                <Form.Group controlId="VerifyKey" className="ml-5">
                  <Form.Label className="text-center center_input_label">
                    Enter Verification Key
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Verification Key"
                    className="text-center  center_input_box"
                  ></Form.Control>
                </Form.Group>
              </Form>
              <button onClick={this.checkCode} className="verify-btn block " type="submit">
                Verify
              </button>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(VerifyMail);
