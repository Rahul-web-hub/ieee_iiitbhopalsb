
import React from "react";
import Home from "./Home/home";
import Navbar from "../components/Navbar/Navbar";


function App() {
    return <>
        <Navbar />
        <Home />
    </>
}
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from '../components/Home'; // Import your Home component

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