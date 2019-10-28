import React, { Component } from "react";

import "./Laptopproducts.css";
import Image from "./laptop1.jpeg";
class LaptopProducts extends Component {
  state = {
    prouctsLaptop: [{ products: false }]
  };
  render() {
    const { prouctsLaptop } = this.state;
    const theproductsLaptop = prouctsLaptop.map(product => {
      return (
        <div className="card-laptp  col-md-10 col-xs-12 col-sm-12">
          <img src={Image} alt="Denim Jeans" style={{ width: "100%" }} />
          <h2>Mobile Samsung</h2>
          <p className="price-laptop">$19.99</p>
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
      <div className="LaptopProducts ">
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
      </div>
    );
  }
}

export default LaptopProducts;
