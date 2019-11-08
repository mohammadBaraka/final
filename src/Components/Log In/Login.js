import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "./HomePge.css";
import { NavLink } from "react-router-dom";
class HomePage extends Component {
  handleDefault = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container-home">
        {/*Form with header*/}
        <div className="card_form">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <form onSubmit={this.handleDefault}>
                  <div className="form-header">
                    <h3>
                      <i class="fa fa-lock"></i> Login:
                    </h3>
                  </div>
                  <div className="purple-text form_input">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>

                  <button className="btn btn-success">Login</button>
                  <NavLink to="/">
                    {" "}
                    <button className="btn btn-light sign_up sign_up">
                      Sign Up
                    </button>
                  </NavLink>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default HomePage;
