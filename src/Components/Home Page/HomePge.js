import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div className="container-home">
        <div className="card_form">
          <div className="card-block">
            {/*Header*/}
            <div className="form-header blue-gradient">
              <h3>
                <i className="fa fa-user" /> Register:
              </h3>
            </div>
            {/*Body*/}
            <div className="md-form">
              <i className="fa fa-user prefix" />
              <input type="text" id="form3" className="form-control" />
              <label htmlFor="form3">Your name</label>
            </div>
            <div className="md-form">
              <i className="fa fa-envelope prefix" />
              <input type="text" id="form2" className="form-control" />
              <label htmlFor="form2">Your email</label>
            </div>
            <div className="md-form">
              <i className="fa fa-lock prefix" />
              <input type="password" id="form4" className="form-control" />
              <label htmlFor="form4">Your password</label>
            </div>
            <div className="text-center">
              <button className="btn btn-indigo">Sign up</button>
              <hr />
              <fieldset className="form-group">
                <input type="checkbox" id="checkbox1" />
                <label htmlFor="checkbox1">
                  Subscribe me to the newsletter
                </label>
              </fieldset>
            </div>
          </div>
        </div>
        {/*/Form with header*/}
      </div>
    );
  }
}

export default HomePage;
