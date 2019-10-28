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
          <img src={Image} alt="Denim Jeans" style={{ width: "100%" }} />
          <h2>Mobile Samsung</h2>
          <p className="price-screen">$19.99</p>
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
