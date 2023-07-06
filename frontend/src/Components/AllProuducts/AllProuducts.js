import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UrlProducts } from "../URLS/URLS";
import "./AllProuducts.css";
import axios from "axios";
import Img from "./2.jpg";
function AllProuducts() {
  // const URL =;
  const [products, setProducts] = useState([]);
  const cat = useLocation().search;
  console.log(cat);
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
        return (
          <div key={prod.product_id}>
            <div className="card_all">
              <button
                className="btn-delete"
                onClick={() => this.deleteProduct()}
              >
                Delete
              </button>
              <div className="header-product">
                <p className="card-title">{prod.title}</p>
              </div>

              <img
                className="card-img-top"
                src={Img}
                alt="Card "
                draggable="false"
                width="100%"
                height="50%"
              />

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
