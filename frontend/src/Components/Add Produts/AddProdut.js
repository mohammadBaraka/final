import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MDBInput, MDBCol, MDBContainer } from "mdbreact";
import "./AddProduct.css";

import React from "react";

function AddProdut() {
  return (
    <div className="AddProduct purple-text ">
      <div className="items">
        <div className="shop_product">
          <h2>
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            Add Product
          </h2>
        </div>
        <MDBCol md="12">
          <form>
            <MDBInput
              label="Name Of Product"
              size="lg"
              icon="fa fa-spinner"
              name="product_name"
            />
            <select
              className="btn btn-light"
              icon="fa fa-spinner"
              name="product_type"
            ></select>
            <MDBContainer fluid>
              <MDBInput
                label="Details Of Product"
                size="lg"
                type="textarea"
                icon="pencil-alt"
                name="product_area"
                color="red"
              />

              <input
                style={{ display: "none" }}
                size="lg"
                className="btn btn-light"
                block
                type="file"
                multiple
                id="file"
              />
              <label className="btn btn-light" htmlFor="file">
                Upload
              </label>
            </MDBContainer>
            <div className="form-group">
              <ToastContainer />
            </div>
            <button type="submit" className="btn btn-success submit">
              Submit
            </button>
          </form>
        </MDBCol>
      </div>
    </div>
  );
}

export default AddProdut;
