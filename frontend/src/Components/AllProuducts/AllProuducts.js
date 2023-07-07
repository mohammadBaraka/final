import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UrlProducts } from "../URLS/URLS";
import "./AllProuducts.css";
import axios from "axios";
import { ContextApi } from "../../Context/AuthContext";
import { handeMessage } from "../SweetAlert/SweetAlert";
import Swal from "sweetalert2";
function AllProuducts() {
  const [products, setProducts] = useState([]);
  const { currentUser } = useContext(ContextApi);
  const cat = useLocation().search;

  const deleteProduct = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`${UrlProducts}/${id}`);
          handeMessage("success", "Delete Produt Successfully!");

          // setTimeout(() => {
          //   navigate("/");
          // }, 3000);
        }
      });
    } catch (error) {
      handeMessage("error", error.response.data);
    }
  };
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
              <div className="header-product">
                <p className="card-title">{prod.title}</p>
              </div>
              {prod?.users_id === currentUser?.id && (
                <div className="button-contetn">
                  <button
                    onClick={() => deleteProduct(prod.product_id)}
                    className="btn btn-danger button"
                  >
                    Delete
                  </button>
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
