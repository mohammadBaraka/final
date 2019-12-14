import React, { Component } from "react";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MDBInput, MDBCol, MDBContainer } from "mdbreact";
import "./AddProduct.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sub_categories: [],
      selectedFile: null,
      loaded: 0,
      product_name: "",
      product_type: "",
      product_area: ""
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
    console.log(event.target.value);
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
      <div className="AddProduct purple-text ">
        <div className="items">
          <div className="shop_product">
            <h2>
              <i class="fa fa-cart-plus" aria-hidden="true"></i>
              Add Product
            </h2>
          </div>
          <MDBCol md="12">
            <form onSubmit={this.onSubmitHandler}>
              <MDBInput
                label="Name Of Product"
                size="lg"
                name=""
                icon="fa fa-spinner"
                name="product_name"
                onChange={this.handleChangeInput}
              />
              <select
                className="btn btn-light"
                icon="fa fa-spinner"
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
              <MDBContainer fluid>
                <MDBInput
                  label="Details Of Product"
                  size="lg"
                  type="textarea"
                  icon="pencil-alt"
                  name="product_area"
                  color="red"
                  onChange={this.handleChangeInput}
                />

                <input
                  size="lg"
                  className="btn btn-light"
                  block
                  onChange={this.handleChangeInput}
                  type="file"
                  multiple
                  onChange={this.onChangeHandler}
                />
              </MDBContainer>
              <div className="form-group">
                <ToastContainer />
                <Progress
                  classNam="btn btn-success"
                  max="100"
                  color="success"
                  value={this.state.loaded}
                >
                  {Math.round(this.state.loaded, 6)}%
                </Progress>
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
}

export default AddProduct;
