import { Link } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { ContextApi } from "../../Context/AuthContext";

function NavBar() {
  const { currentUser, logout } = useContext(ContextApi);

  return (
    <div>
      <div className="NavBar">
        <div className="header p-3 mb-2 bg-dark text-">
          <Link to="/add">
            <button className="btn btn-success ">
              Add Product
              <i className="fa fa-plus-circle"></i>
            </button>
          </Link>
          {currentUser !== null ? (
            <Link onClick={logout} className="btn btn-danger sign">
              <i className="fas fa-sign-in-alt fa-larg"></i>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-light sign">
              <i className="fas fa-sign-in-alt fa-larg"></i>
              Login
            </Link>
          )}
        </div>
        <div className="NavigationBar">
          <Link exact to="/phone" className="btn btn-info active ">
            Phones
            <i className="fa fa-mobile-alt"></i>
          </Link>
          <Link to="/" className="btn btn-dark">
            New Products
            <i className="fa fa-spinner fa-spin"></i>
          </Link>
          <Link to="/laptops" className="btn btn-info">
            Laptops
            <i className="fa fa-laptop"></i>
          </Link>
          <Link to="/screen" className="btn btn-info">
            Screens
            <i className="fa fa-desktop"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
