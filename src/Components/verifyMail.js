import React, { Component } from 'react'
import { Card, Image, Form } from 'react-bootstrap'
import company_logo_ex from '../images/company_logo_ex.jpg'
class VerifyMail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Comp_name: 'Company',
      Imgsrc: company_logo_ex,
    }
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
              <button className="verify-btn block " type="submit">
                Verify
              </button>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default VerifyMail
