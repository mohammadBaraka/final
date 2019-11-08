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
        <div product={this.state.product} className="card_all ltreffect">
          <img src={Image} alt="Denim Jeans" style={{ width: "100%" }} />
          <h1>Tailored Jeans</h1>
          <p className="price">$19.99</p>
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
