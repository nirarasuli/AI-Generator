import React from "react";
import SeoContent from "./components/SeoContent";
import Instagram from "./components/Instagram";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Instagram" element={<Instagram/>}/>
          <Route path="/SeoContent" element={<SeoContent/>}/>
        </Routes>
        <Footer/>
      </div>
  </Router>
  );
}

export default App;
