import React, { Component } from "react";
import Image from "./laptop1.jpeg";
import "./Details.css";
class Details extends Component {
  state = {
    details: []
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:8000/user");
      const result = await response.json();
      if (result) {
        const details = result.data;
        this.setState({ details });
        console.log(this.state.details);
      } else {
        console.log(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const detailsOwner = this.state.details.map((item, indexDetails) => {
      return (
        <div key={indexDetails}>
          <p>
            <span>Name:</span> {item.first_name}
          </p>
          <p>
            <span>Email:</span> {item.email}
          </p>
          <p>
            <span>Address:</span> {item.price}
          </p>
          <p>
            <span>Phone:</span> {item.phone_number}
          </p>
        </div>
      );
    });
    return (
      <div className="Details">
        <div className="container_details">
          <div className="details_position">
            <h2>
              <i className="fas fa-info-circle"></i>
              Details Of Product
            </h2>
          </div>
          <div className="details_product">
            <div className="details_owner">{detailsOwner}</div>
            <div className="img_details">
              <img src={Image} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
