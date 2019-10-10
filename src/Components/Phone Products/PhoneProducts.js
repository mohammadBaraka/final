import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './PhoneProducts.css';
import Image from './mobile.jpg';
class PhoenProducts extends Component {
    render() { 
        return (
            <div className="PhoenProducts1">
             <NavBar />
            <div className="PhoenProducts">
           
                 <div className="container-phones">
  <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-phones">Product1</div>
</div>
 <div className="container-phones">
   <img src={Image} className="image" alt="mobile" />
  <div className="overlay-phones">Product2</div>
</div>
 <div className="container-phones">
   <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-phones">Product3</div>
</div>
<div className="container-phones">
   <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-phones">Product4</div>
</div>
<div className="container-phones">
   <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-phones">Product5</div>
</div>
<div className="container-phones">
   <img src={Image}  className="image" alt="mobile"/>
  <div className="overlay-phones">Product6</div>
</div>
 <div className="container-phones">
    <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-phones">Product7</div>
</div>
 <div className="container-phones">
   <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-phones">Product8</div>
</div>
 <div className="container-phones">
  <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-phones">Product9</div>
</div>
  </div>
  <Footer />
            </div>
          );
    }
}
 
export default PhoenProducts;