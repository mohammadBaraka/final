import React, { Component, useEffect, useState } from "react";
import Image from "./laptop1.jpeg";
import { UrlProducts } from "../URLS/URLS";
import "./Details.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  const [product, setProduct] = useState("");
  const productID = useParams();
  useEffect(() => {
    const res = axios
      .get(`${UrlProducts}/${productID.product_id}`)
      .then((response) => {
        console.log(response.data.data);
        setProduct(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <div className="details_owner">
            <div>
              <p>
                <span>Name:</span> {product.first_name}
              </p>
              <p>
                <span>Email:</span> {product.email}
              </p>
              <p>
                <span>Price:</span> {product.price} $
              </p>

              <p>
                <span>Address:</span> {product.address}
              </p>
              <p>
                <span>Phone:</span> {product.phone_number}
              </p>
            </div>

            <div className="img_details">
              <img src={Image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
