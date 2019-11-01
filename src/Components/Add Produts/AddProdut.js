import React, { Component } from "react";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddProduct.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sub_categories: [],
      selectedFile: null,
      product_name: "",
      product_type: "",
      product_area: "",
      place_product: "",
      number_product: "",
      email_product: "",
      loaded: 0
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/sub_categories")
      .then(response => response.json())
      .then(result => {
        this.setState({
          sub_categories: result.data
        });
      });
  }

  handleChangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlDefault = e => {
    e.preventDefault();
  };
  checkMimeType = event => {
    //getting file object
    let files = event.target.files;
    //define message container
    let err = [];
    // list allow mime type
    const types = ["image/png", "image/jpeg", "image/gif"];
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every(type => files[x].type !== type)) {
        // create error message and assign to container
        err[x] = files[x].type + " is not a supported format\n";
      }
    }
    for (var z = 0; z < err.length; z++) {
      // if message not same old that mean has error
      // discard selected file
      toast.error(err[z]);
      event.target.value = null;
    }
    return true;
  };
  maxSelectFile = event => {
    let files = event.target.files;
    if (files.length > 3) {
      const msg = "Only 3 images can be uploaded at a time";
      event.target.value = null;
      toast.warn(msg);
      return false;
    }
    return true;
  };
  checkFileSize = event => {
    let files = event.target.files;
    let size = 2000000;
    let err = [];
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err[x] = files[x].type + "is too large, please pick a smaller file\n";
      }
    }
    for (var z = 0; z < err.length; z++) {
      // if message not same old that mean has error
      // discard selected file
      toast.error(err[z]);
      event.target.value = null;
    }
    return true;
  };
  onChangeHandler = event => {
    var files = event.target.files;
    if (
      this.maxSelectFile(event) &&
      this.checkMimeType(event) &&
      this.checkFileSize(event)
    ) {
      // if return true allow to setState
      this.setState({
        selectedFile: files,
        loaded: 0
      });
    }
  };
  onSubmitHandler = event => {
    event.preventDefault();

    const data = new FormData();
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      data.append("file", this.state.selectedFile[x]);
    }
    data.append("product_name", this.state.product_name);
    data.append("product_type", this.state.product_type);
    data.append("product_area", this.state.product_area);
    data.append("place_product", this.state.place_product);
    data.append("number_product", this.state.number_product);
    data.append("email_product", this.state.email_product);

    axios
      .post("http://localhost:8000/images/upload", data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
          });
        }
      })
      .then(res => {
        // then print response status
        toast.success("upload success");
      })
      .catch(err => {
        console.log(err);
        // then print response status
        toast.error("upload fail");
      });
  };
  render() {
    return (
      <div className="AddProduct">
        <form onSubmit={this.onSubmitHandler}>
          <div className="item1">
            <input
              onChange={this.handleChangeInput}
              className="btn btn-secondary"
              type="text"
              name="product_name"
              placeholder="Name Of Product"
            />
            <button className="btn btn-danger">Name Of Product</button>
          </div>
          <div className="item2">
            <select
              className="btn btn-secondary"
              name="product_type"
              onChange={this.handleChangeInput}
            >
              {this.state.sub_categories.map(sub_categorie => {
                return (
                  <option value={sub_categorie.sub_categories_id}>
                    {sub_categorie.name}
                  </option>
                );
              })}
            </select>
            <button className="btn btn-danger">Select Type Of Product</button>
          </div>
          <div className="item3">
            <textarea
              onChange={this.handleChangeInput}
              name="product_area"
              className="btn btn-secondary"
              type="text"
              cols="30"
              rows="5"
              placeholder="Details Of Product"
            ></textarea>
            <button className="btn btn-danger">Details Of Product</button>
          </div>
          <div className="item4">
            <input
              onChange={this.handleChangeInput}
              type="file"
              className="btn btn-secondary"
              multiple
              onChange={this.onChangeHandler}
            />
            <button className="btn btn-danger">Upload Your File </button>
            <div className="form-group">
              <ToastContainer />
              <Progress
                classNam="btn btn-secondary"
                max="100"
                color="success"
                value={this.state.loaded}
              >
                {Math.round(this.state.loaded, 6)}%
              </Progress>
            </div>
          </div>
          <div className="item5">
            <input
              onChange={this.handleChangeInput}
              name="place_product"
              className="btn btn-secondary"
              type="text"
              placeholder="Place"
            />
            <label className="btn btn-danger">Place</label>
            <input
              onChange={this.handleChangeInput}
              name="number_product"
              className="btn btn-secondary"
              type="number"
              placeholder="Phone Number"
            />
            <label className="btn btn-danger">Mobile</label>
            <input
              onChange={this.handleChangeInput}
              className="btn btn-secondary"
              name="email_product"
              type="email"
              placeholder="Email"
            />
            <label className="btn btn-danger">Email</label>
          </div>

          <div className="item6">
            <input
              onChange={this.handleChangeInput}
              type="checkbox"
              name="vehicle1"
              value="phone"
            />{" "}
            Phone
            <input
              onChange={this.handleChangeInput}
              type="checkbox"
              name="vehicle2"
              value="email"
            />{" "}
            Email
            <input type="checkbox" name="vehicle3" value="phone/email" />
            Email/Phone
            <button className="btn btn-success">Contact With</button>
          </div>

          <div className="item7">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProduct;
