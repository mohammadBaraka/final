import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './ScreenProducts.css';
import Image from './screen.png';

class ScreenProducts extends Component {
   
    render() { 
        return (  
            <div className="ScreenProducts1">
            <NavBar />
            <div className="ScreenProducts" >
            
                 <div className="container-screens">
  <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-scrreens">Product1</div>
</div>
 <div className="container-screens">
   <img src={Image} className="image" alt="mobile" />
  <div className="overlay-scrreens">Product2</div>
</div>
 <div className="container-screens">
   <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-scrreens">Product3</div>
</div>
<div className="container-screens">
   <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-scrreens">Product4</div>
</div>
<div className="container-screens">
   <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-scrreens">Product5</div>
</div>
<div className="container-screens">
   <img src={Image}  className="image" alt="mobile"/>
  <div className="overlay-scrreens">Product6</div>
</div>
 <div className="container-screens">
    <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-scrreens">Product7</div>
</div>
 <div className="container-screens">
   <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-scrreens">Product8</div>
</div>
 <div className="container-screens">
  <img src={Image}  className="image" alt="mobile" />
  <div className="overlay-scrreens">Product9</div>
</div>
  </div>
  <Footer />
            </div>
        );
    }
}
 
export default ScreenProducts;