import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Laptopproducts.css";
// import Image from "./laptop1.jpeg";
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

  deleteProductLaptop = item => {
    const productsLaptop = this.state.productsLaptop;
    const lap = productsLaptop.findIndex(lap => lap === item);
    productsLaptop.splice(lap, 1);
    this.setState({ productsLaptop });
  };

  render() {
    const { productsLaptop } = this.state;
    const productLap = productsLaptop.length;
    const productMapLap = productLap ? (
      this.state.productsLaptop.map((item_lap, indexLap) => {
        return (
          <div key={indexLap}>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteProductLaptop(item_lap)}
            >
              Delete
            </button>
            <div className="card-lap">
              <div className="card-lap">
                <img
                  className="card-img-top"
                  src={`http://localhost:8000/${item_lap.name}`}
                  alt="Card image cap"
                  draggable="false"
                />

                <div className="card-body">
                  {/* Title */}
                  <h4 className="card-title">
                    <p>{item_lap.title}</p>
                  </h4>
                  {/* Text */}
                  <p className="card-text">{item_lap.description}</p>
                  {/* Button */}
                  <NavLink to="details" className="btn btn-info">
                    {" "}
                    Show Details
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="no_products">
        <p>There Is No Product To Show !</p>
      </div>
    );
    return <div className="LaptopProducts">{productMapLap}</div>;
  }
}

export default LaptopProducts;
