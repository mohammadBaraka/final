import React, { Component } from "react";
import "./ScreenProducts.css";
import { NavLink } from "react-router-dom";
import Image from "./screen.png";

class ScreenProducts extends Component {
  state = {
    productScreen: []
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:8000/products/cat/3");
      const result = await response.json();
      if (result) {
        const productScreen = result.data;
        this.setState({ productScreen });
        console.log(this.state.productScreen);
      } else console.log(result.message);
    } catch (err) {
      console.log(err);
    }
  }
  deleteProductScreen = item => {
    const productScreen = this.state.productScreen;
    const screen = productScreen.findIndex(screen => screen === item);
    productScreen.splice(screen, 1);
    this.setState({ productScreen });
  };
  render() {
    const { productScreen } = this.state;
    const product = productScreen.length;
    const productMapScreen = product ? (
      this.state.productScreen.map((item_screen, indexScreen) => {
        return (
          <div key={indexScreen}>
            <div className="card-screen ">
              <button
                className="btn-delete-scr"
                onClick={() => this.deleteProductScreen(item_screen)}
              >
                Delete
              </button>
              <div className="header-product-scr">
                <p className="card-title">{item_screen.title}</p>
              </div>
              {/* Card image */}
              <img
                className="card-img-top"
                src={`http://localhost:8000//products/cat/3${item_screen.name}`}
                alt="Card image cap"
                draggable="false"
                width="100%"
                height="50%"
              />
              {/* Card content */}
              <div className="card-body">
                <p className="card-text">{item_screen.description}</p>
              </div>
              <NavLink to="details" className="btn btn-dark btn_all">
                {" "}
                Show Details
              </NavLink>
            </div>
          </div>
        );
      })
    ) : (
      <div className="no_products ">
        <p>There Is No Product To Show !</p>
      </div>
    );
    return <div className="ScreenProducts">{productMapScreen}</div>;
  }
}

export default ScreenProducts;
