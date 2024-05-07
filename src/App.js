import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import { data } from "./data";
import Clothes from "./Clothes";
import './App.css';
import Buttons from "./Buttons";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import AboutProduct from "./AboutProduct";






function App() {
  return <Router>
    <nav>
      <Link to="/"className="link">Shop</Link>
      <Link to = "/about" className="link">About</Link>
      <Link to = "/contact" className="link">Contact US</Link>
    </nav>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/about/:title' element={<AboutProduct/>}/>

    </Routes>
  </Router>



}

export default App;