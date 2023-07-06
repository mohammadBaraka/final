import React, { Component } from "react";
import AllProuducts from "./Components/AllProuducts//AllProuducts";
import LaptopProducts from "./Components/Laptop products/Laptopproducts";
import PhoenProducts from "./Components/Phone Products/PhoneProducts";
import ScreenProducts from "./Components/Screen Products/ScreenProducts";
import AddProduct from "./Components/Add Produts/AddProdut";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Log In/Login";
import SignUp from "./Components/Sign UP/Singn Up";
import Details from "./Components/Details/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<AllProuducts />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/phone" element={<PhoenProducts />} />
            <Route path="/laptops" element={<LaptopProducts />} />
            <Route path="/screen" element={<ScreenProducts />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/details/:product_id" element={<Details />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
