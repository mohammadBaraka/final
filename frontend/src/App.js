import React, { Component } from "react";
import AllProuducts from "./Components/AllProuducts//AllProuducts";
import AddProduct from "./Components/Add Produts/AddProdut";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Log In/Login";
import SignUp from "./Components/Sign UP/Singn Up";
import Details from "./Components/Details/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./Components/Update/Update";
import Profile from "./Components/Profile/Profile";

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
            <Route path="/add" element={<AddProduct />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/edit/:id" element={<Update />} />
            <Route path="/details/:product_id" element={<Details />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
