import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UrlProducts } from "../URLS/URLS";
import "./AllProuducts.css";
import axios from "axios";
import { ContextApi } from "../../Context/AuthContext";
function AllProuducts() {
  // const URL =;
  const [products, setProducts] = useState([]);
  const { currentUser } = useContext(ContextApi);

  const cat = useLocation().search;
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(`${UrlProducts}${cat}`);
        setProducts(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllProducts();
  }, [cat]);
  return (
    <div className="AllProducts">
      {products.map((prod) => {
        console.log(prod.users_id);
        return (
          <div key={prod.product_id}>
            <div className="card_all">
              <div className="header-product">
                <p className="card-title">{prod.title}</p>
              </div>
              {prod?.users_id === currentUser?.id && (
                <div className="button-contetn">
                  <button className="btn btn-danger button">Delete</button>
                  <Link
                    to={`/add?edit=${prod.users_id}`}
                    state={prod}
                    className="btn btn-primary button"
                  >
                    Edit
                  </Link>
                </div>
              )}

              <div className="image-content">
                <img
                  className="card-img-top"
                  src={`./upload/${prod.images}`}
                  alt="Card "
                  draggable="false"
                  style={{
                    width: "100%",
                    height: "90%",
                    marginTop: "20px",
                  }}
                />
              </div>

              <div className="details">
                <p className="card-text"></p>
              </div>

              <Link
                to={`/details/${prod.product_id}`}
                className="btn btn-dark btn_all"
              >
                Show Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllProuducts;
// export default AllProducts;
