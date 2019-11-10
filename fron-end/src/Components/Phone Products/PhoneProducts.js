import React, { Component } from "react";
import "./PhoneProducts.css";
import Image from "./mobile.jpg";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
class PhoenProducts extends Component {
  state = {
    productsPhone: [{ products: false }],
    phone: []
  };
  render() {
    const { productsPhone } = this.state;
    const theProductsPhone = productsPhone.map(product => {
      return (
        <div className="card-phone">
          <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage
                className="img-fluid text-center"
                src={Image}
                waves
              />
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
      <div className="PhoenProducts  col-md-10 col-xs-12 col-sm-12">
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
        {theProductsPhone}
      </div>
    );
  }
}

export default PhoenProducts;
