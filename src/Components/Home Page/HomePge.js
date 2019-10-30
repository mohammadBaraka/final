import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div className="container-home">
        {/* Default form register */}
        <form className="text-center border border-light p-5" action="#!">
          <p className="h4 mb-4">Sign up</p>
          <div className="form-row mb-4">
            <div className="col">
              {/* First name */}
              <input
                type="text"
                id="defaultRegisterFormFirstName"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col">
              {/* Last name */}
              <input
                type="text"
                id="defaultRegisterFormLastName"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          {/* E-mail */}
          <input
            type="email"
            id="defaultRegisterFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />
          {/* Password */}
          <input
            type="password"
            id="defaultRegisterFormPassword"
            className="form-control"
            placeholder="Password"
            aria-describedby="defaultRegisterFormPasswordHelpBlock"
          />
          <small
            id="defaultRegisterFormPasswordHelpBlock"
            className="form-text text-muted mb-4"
          >
            At least 8 characters and 1 digit
          </small>
          {/* Phone number */}
          <input
            type="text"
            id="defaultRegisterPhonePassword"
            className="form-control"
            placeholder="Phone number"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
          />
          <small
            id="defaultRegisterFormPhoneHelpBlock"
            className="form-text text-muted mb-4"
          >
            Optional - for two step authentication
          </small>
          {/* Newsletter */}
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultRegisterFormNewsletter"
            />
            <label
              className="custom-control-label"
              htmlFor="defaultRegisterFormNewsletter"
            >
              Subscribe to our newsletter
            </label>
          </div>
          {/* Sign up button */}
          <button className="btn btn-info my-4 btn-block" type="submit">
            Sign in
          </button>
          {/* Social register */}
          <p>or sign up with:</p>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-facebook-f light-blue-text" />
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-twitter light-blue-text" />
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-linkedin-in light-blue-text" />
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-github light-blue-text" />
          </a>
          <hr />
          {/* Terms of service */}
          <p>
            By clicking
            <em>Sign up</em> you agree to our
            <a href target="_blank">
              terms of service
            </a>
          </p>
        </form>
        {/* Default form register */}
      </div>
    );
  }
}

export default HomePage;
