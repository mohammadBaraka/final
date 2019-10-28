import React, { Component } from "react";
import "./AddProduct.css";

class AddProduct extends Component {
  handlDefault = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="AddProduct">
        <form onSubmit={this.handlDefault}>
          <div className="item1">
            <input
              className="btn btn-secondary"
              type="text"
              placeholder="Name Of Product"
            />
            <button className="btn btn-danger">Name Of Product</button>
          </div>
          <div className="item2">
            <select className="btn btn-secondary">
              <option value="phone">Phone</option>
              <option value="laptop">Laptop</option>
              <option value="screen">Sceeen</option>
            </select>
            <button className="btn btn-danger">Select a Product</button>
          </div>
          <div className="item3">
            <textarea
              className="btn btn-secondary"
              type="text"
              cols="30"
              rows="5"
              placeholder="Details Of Product"
            ></textarea>
            <button className="btn btn-danger">Details Of Product</button>
          </div>
          <div className="item4">
            <input
              className="btn btn-secondary"
              type="file"
              name="filename"
              multiple={true}
              accept="image/gif, image/jpeg, image/png"
            />

            <button type="submit" className="btn btn-danger">
              Add Your Product
            </button>
          </div>
          <div className="item5">
            <input
              className="btn btn-secondary"
              type="text"
              placeholder="Place"
            />
            <label className="btn btn-danger">Place</label>
            <input
              className="btn btn-secondary"
              type="text"
              placeholder="Name"
            />
            <label className="btn btn-danger">Name</label>
            <input
              className="btn btn-secondary"
              type="number"
              placeholder="Phone Number"
            />
            <label className="btn btn-danger">Mobile</label>
            <input
              className="btn btn-secondary"
              type="email"
              placeholder="Place"
            />
            <label className="btn btn-danger">Email</label>
          </div>
        </form>
        <div className="item6">
          <input type="checkbox" name="vehicle1" value="phone" /> Phone
          <input type="checkbox" name="vehicle2" value="email" /> Email
          <input type="checkbox" name="vehicle3" value="phone/email" />
          Email/Phone
          <buutton className="btn btn-success">Contact With</buutton>
        </div>

        <div className="item7">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddProduct;
