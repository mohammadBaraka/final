import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./AllProuducts.css";
// import Image from "../AllProuducts/5.png";
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
    return (
      <div className="AllProducts">
        {this.state.productsAll.map((item, index) => (
          <div key={index}>
            <button onClick={() => this.deleteProduct(item)}>Delete</button>
            <div className="card_all">
              {/* Card image */}
              <img
                className="card-img-top"
                src={`http://localhost:8000/${item.name}`}
                alt="Card image cap"
                draggable="false"
              />
              <div className="ditails">
                <h4 className="card-title">
                  <p>{item.title}</p>
                </h4>
                {/* Text */}
                <p className="card-text">{item.description}</p>
              </div>
              {/* Button */}
              <NavLink to="details" className="btn btn-danger btn_all">
                {" "}
                Show Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AllProducts;
