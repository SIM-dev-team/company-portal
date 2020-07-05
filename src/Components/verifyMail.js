import React, { Component } from 'react'
import { Card, Form } from 'react-bootstrap'

import { withRouter } from 'react-router-dom'

class VerifyMail extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  checkCode = (x) => {
    x.preventDefault()
    // if(check correct code ? true){}
    this.props.history.push('/login')
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
              <button
                onClick={this.checkCode}
                className="verify-btn block "
                type="submit"
              >
                Verify
              </button>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(VerifyMail)
