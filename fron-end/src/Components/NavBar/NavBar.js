import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="header p-3 mb-2 bg-dark text-">
          <NavLink to="/add">
            <button className="btn btn-success ">
              Add Product
              <i className="fa fa-plus-circle"></i>
            </button>
          </NavLink>
          <NavLink
            to="/home"
            className="btn btn-light sign"
            placeholder="Search"
          >
            <i className="fas fa-sign-in-alt fa-larg"></i>
            Log In
          </NavLink>
        </div>
        <div className="NavigationBar">
          <NavLink exact to="/phone" className="btn btn-info active ">
            Phones
            <i className="fa fa-mobile-alt"></i>
          </NavLink>
          <NavLink to="/allproduct" className="btn btn-dark">
            New Products
            <i className="fa fa-spinner fa-spin"></i>
          </NavLink>
          <NavLink to="/laptops" className="btn btn-info">
            Laptops
            <i className="fa fa-laptop"></i>
          </NavLink>
          <NavLink to="/screen" className="btn btn-info">
            Screens
            <i className="fa fa-desktop"></i>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
