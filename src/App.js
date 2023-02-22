import logo from "./logo.svg";
import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

//  Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Pages
import Home from "./pages/Home/Home";
import Counseling from "./pages/Counseling/Counseling";
import { useLocation } from "react-router-dom";

function App() {
  
  let location = useLocation().pathname;

  return (
    <>
      <Header location={location}></Header>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/counseling" element={<Counseling />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
