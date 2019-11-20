import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Laptopproducts.css";
import Image from "./laptop1.jpeg";
class LaptopProducts extends Component {
  state = {
    productsLaptop: []
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:8000/products/cat/1");
      const result = await response.json();
      if (result) {
        const productsLaptop = result.data;
        this.setState({ productsLaptop });
        console.log(this.state.productsLaptop);
      } else console.log(result.message);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="LaptopProducts">
        {this.state.productsLaptop.map(item_lap => (
          <div key="laptopProducts">
            <div className="card-lap">
              <div className="card-lap">
                {/* Card image */}
                <img
                  className="card-img-top"
                  src={`http://localhost:8000/${item_lap.name}`}
                  alt="Card image cap"
                  draggable="false"
                />
                {/* Card content */}
                <div className="card-body">
                  {/* Title */}
                  <h4 className="card-title">
                    <p>{item_lap.title}</p>
                  </h4>
                  {/* Text */}
                  <p className="card-text">{item_lap.description}</p>
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

export default LaptopProducts;
