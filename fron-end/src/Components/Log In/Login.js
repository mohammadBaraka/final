import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "./Login.css";
import { NavLink } from "react-router-dom";
class HomePage extends Component {
  handleDefault = e => {
    e.preventDefault();
  };
  muFunction = () => {
    const check = document.getElementById("myInput");
    if (check.type === "password") {
      check.type = "text";
    } else {
      check.type = "password";
    }
  };
  render() {
    return (
      <div className="container-home">
        {/*Form with header*/}
        <div className="card_form card_opacity">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <form onSubmit={this.handleDefault}>
                  <div className="form-header">
                    <h2>
                      <i class="fa fa-lock"></i> Login
                    </h2>
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
                    <div className="pass">
                      <MDBInput
                        id="myInput"
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                      />
                      <h4
                        onClick={this.muFunction}
                        className=" text-purple eye_position"
                      >
                        <i className="fas fa-eye"></i>
                      </h4>
                    </div>
                  </div>

                  <button className="btn btn-success">Login</button>
                  <NavLink to="/">
                    {" "}
                    <button className="btn btn-danger sign_up sign_up">
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
