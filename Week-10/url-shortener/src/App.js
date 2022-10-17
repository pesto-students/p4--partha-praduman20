import React from "react";
import "./App.css";
import Navbar from "./components/nav";
import Body from "./components/body";
import Footer from "./components/footer";
import Contact from "./components/contact";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
