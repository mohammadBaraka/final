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
            <div className="LaptopProducts ">
            < div className = "card-laptp  col-md-10 col-xs-12 col-sm-12" >
   <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-laptop">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-laptp">
  <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-laptop">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-laptp">
   <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-laptop">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-laptp">
   <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-laptop">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-laptp">
   <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-laptop">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-laptp">
   <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-laptop">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-laptp">
   <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-laptop">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-laptp">
   <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-laptop">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>
<div className="card-laptp">
   <img src={Image} alt="Denim Jeans" style={{width: '100%'}} />
  <h2>Mobile Samsung</h2>
  <p className="price-laptop">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button className="btn btn-dark">Add to Cart</button></p>
</div>

</div>
 <Footer />
          </div>
         );
    }
}
 
export default LaptopProducts;