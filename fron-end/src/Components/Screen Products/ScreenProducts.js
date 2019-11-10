import React, { Component } from "react";
import "./ScreenProducts.css";
import Image from "./screen.png";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

class ScreenProducts extends Component {
  state = {
    productsScreen: [{ products: false }]
  };
  render() {
    const { productsScreen } = this.state;
    const theProductsScreen = productsScreen.map(product => {
      return (
        <div className="card-screen">
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
      <div className="ScreenProducts  col-md-10 col-xs-12 col-sm-12">
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
        {theProductsScreen}
      </div>
    );
  }
}

export default ScreenProducts;
