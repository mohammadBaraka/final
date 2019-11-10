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
import "./AllProuducts.css";
import Image from "../AllProuducts/5.png";
class AllProducts extends Component {
  state = {
    productsAll: [{ products: false }],
    AllProducts: []
  };

  render() {
    const { productsAll } = this.state;
    const theProduct = productsAll.map(product => {
      return (
        <div product={this.state.product} className="card_all">
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
      <div className="AllProducts  col-md-10 col-xs-12 col-sm-12">
        {theProduct}
        {theProduct}
        {theProduct}
        {theProduct}
        {theProduct}
        {theProduct}
        {theProduct}
        {theProduct}
        {theProduct}
      </div>
    );
  }
}

export default AllProducts;
