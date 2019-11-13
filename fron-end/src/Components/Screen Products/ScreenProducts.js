import React, { Component } from "react";
import "./ScreenProducts.css";
import Image from "./screen.png";

class ScreenProducts extends Component {
  state = {
    productsScreen: [{ products: false }]
  };
  render() {
    const { productsScreen } = this.state;
    const theProductsScreen = productsScreen.map(product => {
      return (
        <div className="card-screen">
          <div className="card_screen">
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
      <div className="ScreenProducts  col-md-10 col-xs-12 col-sm-12">
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
      </div>
    );
  }
}

export default ScreenProducts;
