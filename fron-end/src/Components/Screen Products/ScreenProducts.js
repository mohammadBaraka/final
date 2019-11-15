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

  render() {
    return (
      <div className="AllProducts">
        {this.state.productScreen.map(item_screen => (
          <div key="allProduct">
            <div className="card_all">
              <div className="card_all">
                {/* Card image */}
                <img
                  className="card-img-top"
                  src={Image}
                  alt="Card image cap"
                  draggable="false"
                />
                {/* Card content */}
                <div className="card-body">
                  {/* Title */}
                  <h4 className="card-title">
                    <p>{item_screen.title}</p>
                  </h4>
                  {/* Text */}
                  <p className="card-text">{item_screen.description}</p>
                  {/* Button */}
                  <NavLink to="details" className="btn btn-danger">
                    {" "}
                    Show Details
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ScreenProducts;
