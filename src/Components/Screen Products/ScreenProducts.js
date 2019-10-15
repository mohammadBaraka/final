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
            < div className = "ScreenProducts  col-md-10 col-xs-12 col-sm-12" >
            
  <div className="card-screen">
  <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-screen">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-screen">
  <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-screen">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-screen">
  <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-screen">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-screen">
  <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-screen">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-screen">
  <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-screen">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-screen">
  <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-screen">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-screen">
  <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-screen">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-screen">
  <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-screen">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-screen">
  <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h1>Mobile Samsung</h1>
  <p className="price-screen">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>

  </div>
  <Footer />
            </div>
        );
    }
}
 
export default ScreenProducts;