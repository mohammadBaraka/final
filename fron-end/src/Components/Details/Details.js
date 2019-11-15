import React, { Component } from "react";
import "./Details.css";
class Details extends Component {
  state = {
    details: []
  };

  render() {
    return (
      <div className="Details">
        <div className="container_details">
          <div className="details_position">
            <h2>
              <i className="fas fa-info-circle"></i>
              Details Of Product
            </h2>
          </div>
          <div className="details_product">
            <div className="details_owner">
              <h4>Email : mohammadbarakat342@gmail.com</h4>
              <h4>Phone : 76445487</h4>
              <h4>Address : Beyrout</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
