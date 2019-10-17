import React, { Component } from "react";
import AllProuducts from "./Components/AllProuducts//AllProuducts";
import LaptopProducts from "./Components/Laptop products/Laptopproducts";
import PhoenProducts from "./Components/Phone Products/PhoneProducts";
import ScreenProducts from "./Components/Screen Products/ScreenProducts";
import AddProduct from "./Components/Add Produts/AddProdut";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={AllProuducts} />
          <Route path="/phone" component={PhoenProducts} />
          <Route path="/laptops" component={LaptopProducts} />
          <Route path="/screen" component={ScreenProducts} />
          <Route path="/add" component={AddProduct} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
