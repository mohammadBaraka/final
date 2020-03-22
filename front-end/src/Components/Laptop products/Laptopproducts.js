import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Laptopproducts.css";
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
      this.state.productsLaptop.map(item_lap => {
        return (
          <div key={item_lap.product_id}>
            <div className="card-lap">
              <button
                className="btn-delete-lap"
                onClick={() => this.deleteProductLaptop(item_lap)}
              >
                Delete
              </button>
              <div className="header-product-lap">
                <p className="card-title">{item_lap.title}</p>
              </div>
              <img
                className="card-img-top"
                src={`http://localhost:8000/${item_lap.images}`}
                alt="Card image cap"
                draggable="false"
                width="100%"
                height="50%"
              />
              <div className="card-body-lap">
                <p className="card-text">{item_lap.description}</p>
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
      <div className="no_products">
        <p>There Is No Product To Show !</p>
      </div>
    );
    return <div className="LaptopProducts">{productMapLap}</div>;
  }
}

export default LaptopProducts;
