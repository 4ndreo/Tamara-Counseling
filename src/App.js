import logo from "./logo.svg";
import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

//  Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
