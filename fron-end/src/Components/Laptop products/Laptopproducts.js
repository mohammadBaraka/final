import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

import "./Laptopproducts.css";
import Image from "./laptop1.jpeg";
class LaptopProducts extends Component {
  state = {
    prouctsLaptop: [{ products: false }]
  };
  render() {
    const { prouctsLaptop } = this.state;
    const theproductsLaptop = prouctsLaptop.map(product => {
      return (
        <div className="card-laptp  col-md-10 col-xs-12 col-sm-12">
          <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src={Image} waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn color="danger" href="#">
                  MDBBtn
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      );
    });
    return (
      <div className="LaptopProducts ">
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
        {theproductsLaptop}
      </div>
    );
  }
}

export default LaptopProducts;
