import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() { 
        return (
            <div className = "NavBar" >
            <div className="header">
            <NavLink to="/add" target="_blank"><button className = "btn btn-success " > 
            Add Product 
            <i className="fa fa-plus-circle"></i>
            </button>
          </NavLink>
            <input className="btn btn-secondary" type= "text" placeholder="Search">
            </input>
            </div>
            <div className="NavigationBar">
            <NavLink exact to="/phone" className="btn btn-info active "> 
             Phones
            <i className="fa fa-mobile"></i>
            </NavLink>
            <NavLink to="/newProduct" className="btn btn-dark">
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