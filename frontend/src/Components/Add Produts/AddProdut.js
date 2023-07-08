import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MDBInput, MDBCol } from "mdbreact";
import "./AddProduct.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { UrlProducts, UploadImage } from "../URLS/URLS";
import { handeMessage } from "../SweetAlert/SweetAlert";
function AddProdut() {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.description || "");
  const [price, setPrice] = useState(state?.price || "");
  const [catName, setCatName] = useState(state?.cat_name || "");
  const [file, setFile] = useState(state?.images || "");

  const upladImg = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(UploadImage, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
      return res.data;
    } catch (err) {
      handeMessage("error", err.response.data);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageUlrl = await upladImg();
    const params = {
      title,
      price,
      description: desc,
      cat_name: catName,
      images: imageUlrl ? imageUlrl : "",
    };
    try {
      const res = (await state)
        ? await axios.put(`${UrlProducts}/${state.product_id}`, params, {
            withCredentials: true,
          })
        : await axios.post(`${UrlProducts}`, params, {
            withCredentials: true,
          });
      {
        state
          ? handeMessage("success", "Edit Product Successfully!")
          : handeMessage("success", "Add Product Successfully!");
      }
      console.log(res.data);
    } catch (error) {
      handeMessage("error", error.response.data);
    }
  };

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
              label="Title"
              size="lg"
              icon="fa fa-spinner"
              name="product_name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <MDBInput
              style={{ margin: "50px " }}
              label="Price"
              size="lg"
              icon="fa-sharp fa-solid fa-dollar-sign"
              name="product_name"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <MDBInput
              style={{ margin: "50px " }}
              label="Description"
              size="lg"
              type="textarea"
              icon="pencil-alt"
              name="product_area"
              color="red"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <select
                style={{ width: "50%" }}
                className="btn btn-light"
                icon="fa fa-spinner"
                name="product_type"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
              >
                <option disabled style={{ color: "#fff" }} value="">
                  {" "}
                  --Please Select Categorie--{" "}
                </option>
                <option>laptop</option>
                <option>screen</option>
                <option>phone</option>
              </select>

              <input
                style={{ display: "none" }}
                size="lg"
                className="btn btn-light"
                block
                type="file"
                multiple
                id="files"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label
                style={{ width: "50%" }}
                className="btn btn-outline-brimary"
                htmlFor="files"
                icon=" fa-solid fa-image"
              >
                Upload Image
              </label>
            </div>

            <div className="form-group">
              <ToastContainer />
            </div>
            {state === null ? (
              <button
                onClick={handleSubmit}
                style={{ width: "100%", margin: "50px 0", fontSize: "20px" }}
                type="submit"
                className="btn btn-success submit"
              >
                Add Produt
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                style={{ width: "100%", margin: "50px 0", fontSize: "20px" }}
                type="submit"
                className="btn btn-primary submit"
              >
                Edit Produt
              </button>
            )}
          </form>
        </MDBCol>
      </div>
    </div>
  );
}

export default AddProdut;
