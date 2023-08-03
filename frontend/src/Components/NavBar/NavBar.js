import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { ContextApi } from "../../Context/AuthContext";

function NavBar() {
  const { currentUser, logout } = useContext(ContextApi);
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };
  return (
    <div>
      <div className="NavBar">
        <div className="header p-3 mb-2 bg-dark text-center">
          <Link to="/add">
            <button className="btn btn-success">
              Add Product
              <i className="fa fa-plus-circle"></i>
            </button>
          </Link>
          {currentUser ? (
            <Link to={`/profile/${currentUser?.id}`}>
              <button className="profile btn btn-dark">
                {" "}
                {currentUser.first_name}
              </button>
            </Link>
          ) : null}
          {currentUser !== null ? (
            <Link>
              <button className="btn btn-danger sign" onClick={handleLogout}>
                <i className="fas fa-sign-in-alt fa-larg"></i>
                Logout
              </button>
            </Link>
          ) : (
            <Link to="/login" className="btn btn-light sign">
              <i className="fas fa-sign-in-alt fa-larg"></i>
              Login
            </Link>
          )}
        </div>
        <div className="NavigationBar">
          <Link exact to="/?cat=phone" className="btn btn-info active ">
            Phones
            <i className="fa fa-mobile-alt"></i>
          </Link>
          <Link to="/" className="btn btn-dark">
            All Products
            <i className="fa fa-spinner fa-spin"></i>
          </Link>
          <Link to="/?cat=laptop" className="btn btn-info">
            Laptops
            <i className="fa fa-laptop"></i>
          </Link>
          <Link to="/?cat=screen" className="btn btn-info">
            Screens
            <i className="fa fa-desktop"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
