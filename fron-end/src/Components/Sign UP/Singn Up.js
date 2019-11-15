import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "./Sign Up.css";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    number: "",
    address: ""
  };

  handleDefault = e => {
    e.preventDefault();
  };

  handleChangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  muFunctionSignUp = () => {
    const check = document.getElementById("myInput");
    if (check.type === "password") {
      check.type = "text";
    } else {
      check.type = "password";
    }
  };

  muFunctionSignUp1 = () => {
    const check = document.getElementById("myInput1");
    if (check.type === "password") {
      check.type = "text";
    } else {
      check.type = "password";
    }
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
                    <h2>
                      <i className="fa fa-user"></i> Register
                    </h2>
                  </div>
                  <div className="purple-text form_input">
                    <MDBInput
                      size="lg"
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="name"
                      onChange={this.handleChangeInput}
                    />
                    <MDBInput
                      size="lg"
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                      onChange={this.handleChangeInput}
                    />

                    <div className="pass_signup">
                      <MDBInput
                        size="lg"
                        id="myInput"
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        name="password"
                        onChange={this.handleChangeInput}
                      />
                      <h4
                        onClick={this.muFunctionSignUp}
                        className="signup_eye"
                      >
                        <i className="fas fa-eye"></i>
                      </h4>
                    </div>
                    <div className="pass_signup1">
                      <MDBInput
                        size="lg"
                        id="myInput1"
                        label="Confirm your Password"
                        icon="exclamation-triangle"
                        group
                        type="password"
                        validate
                        error="wrong"
                        success="right"
                        name="password"
                        onChange={this.handleChangeInput}
                      />
                      <h4
                        onClick={this.muFunctionSignUp1}
                        className="signup_eye1"
                      >
                        <i className="fas fa-eye"></i>
                      </h4>
                    </div>

                    <MDBInput
                      size="lg"
                      label="Phone Number"
                      type="number"
                      icon="fa fa-phone-square"
                      name="number"
                      onChange={this.handleChangeInput}
                    />
                    <MDBInput
                      size="lg"
                      label="Address"
                      icon="fa fa-map-marker"
                      name="address"
                      onChange={this.handleChangeInput}
                    />
                  </div>

                  <button className="btn btn-success">Sign Up</button>
                  <NavLink to="login">
                    <button className="btn btn-danger sign_up">Log In</button>
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
