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
        <div className="card-lap  col-md-10 col-xs-12 col-sm-12">
          <div className="card_lap">
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
              {/* Button */}
              <a href="#" className="btn btn-danger">
                Show Details
              </a>
            </div>
          </div>
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
