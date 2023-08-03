import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <section className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="text-center text-white">
                  © 2019 Done by : Mohammad Barakat.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
