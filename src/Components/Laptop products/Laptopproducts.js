import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './Laptopproducts.css';
import Image from './laptop1.jpeg';
class LaptopProducts extends Component {
   
    render() { 
        return ( 
            <div className="LaptopProducts1">
            <NavBar />
            <div className="LaptopProducts">
            
     <div className="container-laptop">
  <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-laptop">Product1</div>
</div>
 <div className="container-laptop">
   <img src={Image} className="image" alt="mobile" />
  <div className="overlay-laptop">Product2</div>
</div>
 <div className="container-laptop">
   <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-laptop">Product3</div>
</div>
<div className="container-laptop">
   <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-laptop">Product4</div>
</div>
<div className="container-laptop">
   <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-laptop">Product5</div>
</div>
<div className="container-laptop">
   <img src={Image}  className="image" alt="mobile"/>
  <div className="overlay-laptop">Product6</div>
</div>
 <div className="container-laptop">
    <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-laptop">Product7</div>
</div>
 <div className="container-laptop">
   <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-laptop">Product8</div>
</div>
 <div className="container-laptop">
  <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-laptop">Product9</div>
</div>
</div>
 <Footer />
            </div>
         );
    }
}
 
export default LaptopProducts;