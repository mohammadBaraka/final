import React, { useEffect, useState } from "react";
import { NavLink } from "reactstrap";
import "./AllProuducts.css";
import axios from "axios";
function AllProuducts() {
  const URL = `http://localhost:8000/products`;
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(URL);
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);
  return (
    <div className="AllProducts">
      {products.map((prod) => {
        console.log(prod.images);
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
                src={`../../public/${prod.images}`}
                alt="Card image cap"
                draggable="false"
                width="100%"
                height="50%"
              />
              <div className="details">
                <p className="card-text"></p>
              </div>

              <NavLink to="details" className="btn btn-dark btn_all">
                Show Details
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllProuducts;
// export default AllProducts;
