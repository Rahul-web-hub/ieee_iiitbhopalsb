
import React from "react";
import Home from "../components/Home"
// import Navbar from "../components/Navbar/Navbar";
import { Route,BrowserRouter,Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    
  );
};

export default App;