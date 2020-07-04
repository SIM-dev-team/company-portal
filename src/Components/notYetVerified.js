import React, { Component } from 'react'

class NotYetVerified extends Component {
  render() {
    return (
      <div>
        <div className="container " style={{ marginTop: '10em' }}>
          <div className=" text-center">
            <div class="alert alert-danger col-md-12" role="alert" id="notes">
              <ul className="mt-5">
                <li>
                  Your Email is not verified. Please check your email for the
                  verification link
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotYetVerified
