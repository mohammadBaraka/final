import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "./Sign Up.css";

class SignUp extends Component {
  handleDefault = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="Sign_Up">
        {/*Form with header*/}
        <div className="card_sign">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <form onSubmit={this.handleDefault}>
                  <div className="header_signup">
                    <h3>
                      <i class="fa fa-user"></i> Register:
                    </h3>
                  </div>
                  <div className="purple-text form_input">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>

                  <button className="btn btn-success">Sign Up</button>
                  <NavLink to="login">
                    <button className="btn btn-light sign_up">Log In</button>
                  </NavLink>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        {/*/Form with header*/}
      </div>
    );
  }
}

export default SignUp;
