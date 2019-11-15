import React, { Component } from "react";
import "./PhoneProducts.css";
import Image from "./mobile.jpg";
import { NavLink } from "react-router-dom";

class PhoenProducts extends Component {
  state = {
    productsPhone: [{ products: false }],
    phone: []
  };
  render() {
    const { productsPhone } = this.state;
    const theProductsPhone = productsPhone.map(product => {
      return (
        <div className="card-phone">
          <div className="card_phone">
            {/* Card image */}
            <img className="card-img-top" src={Image} alt="Card image cap" />
            {/* Card content */}
            <div className="card-body">
              {/* Title */}
              <h4 className="card-title">
                <p>Card title</p>
              </h4>
              {/* Text */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="details" className="btn btn-danger">
                Show Details
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="PhoenProducts  col-md-10 col-xs-12 col-sm-12">
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
      </div>
    );
  }
}

export default PhoenProducts;
