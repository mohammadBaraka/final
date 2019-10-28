import React, { Component } from "react";
import "./PhoneProducts.css";
import Image from "./mobile.jpg";
class PhoenProducts extends Component {
  state = {
    productsPhone: [{ products: false }]
  };
  render() {
    const { productsPhone } = this.state;
    const theProductsPhone = productsPhone.map(product => {
      return (
        <div className="card-phone">
          <div className="toggle-card"></div>
          <img src={Image} alt="Denim Jeans" style={{ width: "100%" }} />
          <h2>Mobile Samsung</h2>
          <p className="price-phone">$19.99</p>
          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <p>
            <button className="btn btn-dark">Add to Cart</button>
          </p>
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
