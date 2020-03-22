import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./AllProuducts.css";

class AllProducts extends Component {
  state = {
    productsAll: []
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:8000/products");
      const result = await response.json();
      if (result) {
        const productsAll = result.data;
        this.setState({ productsAll });
        console.log(this.state.productsAll);
      } else console.log(result.message);
    } catch (err) {
      console.log(err);
    }
  }
  deleteProduct = item => {
    const productsAll = this.state.productsAll;
    const product = productsAll.findIndex(product => product === item);
    productsAll.splice(product, 1);
    this.setState({ productsAll });
  };

  render() {
    const { productsAll } = this.state;
    const product = productsAll.length;
    const productMap = product ? (
      this.state.productsAll.map(item => {
        return (
          <div key={item.product_id}>
            <div className="card_all">
              <button
                className="btn-delete"
                onClick={() => this.deleteProduct(item)}
              >
                Delete
              </button>
              <div className="header-product">
                <p className="card-title">{item.title}</p>
              </div>
              {/* Card image */}
              <img
                className="card-img-top"
                src={`http://localhost:8000/${item.images}`}
                alt="Card image cap"
                draggable="false"
                width="100%"
                height="50%"
              />
              <div className="details">
                {/* Text */}
                <p className="card-text">
                  {item.description}
                  <span>Price:{item.price}$</span>
                </p>
              </div>

              {/* Button */}
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
    return <div className="AllProducts ">{productMap}</div>;
  }
}

export default AllProducts;
