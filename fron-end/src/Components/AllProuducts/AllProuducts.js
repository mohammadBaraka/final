import React, { Component } from "react";

import "./AllProuducts.css";
import Image from "../AllProuducts/5.png";
class AllProducts extends Component {
  state = {
    productsAll: [{ products: false }],
    AllProducts: []
  };

  render() {
    const { productsAll } = this.state;
    const theProduct = productsAll.map(product => {
      return (
        <div product={this.state.product} className="card_all">
          <div className="card_all">
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
      <div className="AllProducts  col-md-10 col-xs-12 col-sm-12">
        {theProduct}
        {theProduct}
        {theProduct}
        {theProduct}
        {theProduct}
        {theProduct}
        {theProduct}
        {theProduct}
        {theProduct}
      </div>
    );
  }
}

export default AllProducts;
