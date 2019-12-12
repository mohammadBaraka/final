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
    return (
      <div className="PhoenProducts">
        {this.state.productPhone.map((item, indexMobile) => (
          <div key={indexMobile}>
            <button
              onClick={() => {
                this.deletProductMobile(item);
              }}
            >
              Delete
            </button>
            <div className="card-phone">
              <div className="card-phone">
                {/* Card image */}
                <img
                  src={`http://localhost:8000/${item.name}`}
                  alt="Card image cap"
                  draggable="false"
                />
                {/* Card content */}
                <div className="card-body">
                  {/* Title */}
                  <h4 className="card-title">
                    <p>{item.title}</p>
                  </h4>
                  {/* Text */}
                  <p className="card-text">{item.description}</p>
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
export default PhoenProducts;
