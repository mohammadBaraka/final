import React, { Component } from "react";
import "./PhoneProducts.css";
// import Image from "./mobile.jpg";
import { NavLink } from "react-router-dom";

class PhoenProducts extends Component {
  state = {
    productPhone: []
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:8000/products/cat/2");
      const result = await response.json();
      if (result) {
        const productPhone = result.data;
        this.setState({ productPhone });
        console.log(this.state.productPhone);
      } else console.log(result.message);
    } catch (err) {
      console.log(err);
    }
  }
  deletProductMobile = item => {
    const productPhone = this.state.productPhone;
    const phone = productPhone.findIndex(phone => phone === item);
    productPhone.splice(phone, 1);
    this.setState({ productPhone });
  };
  render() {
    const { productPhone } = this.state;
    const product = productPhone.length;
    const productMapPhone = product ? (
      this.state.productPhone.map(item => {
        return (
          <div key={item.product_id}>
            <div className="card-phone">
              <button
                className="btn-delete-phone"
                onClick={() => {
                  this.deletProductMobile(item);
                }}
              >
                Delete
              </button>
              <div className="header-ohone">
                <p className="card-title">{item.title}</p>
              </div>
              {/* Card image */}
              <img
                src={`http://localhost:8000/${item.images}`}
                alt="Card image cap"
                draggable="false"
                width="100%"
                height="50%"
              />
              {/* Card content */}
              <div className="card-body">
                <p className="card-text">{item.description}</p>
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
    return <div className="PhoenProducts">{productMapPhone}</div>;
  }
}
export default PhoenProducts;
