import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Invoices from "./components/Invoices";
import Navbar from "./components/Navbar";

const App = () => {

  // useEffect(() => {
  //   fetch("./data.json")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </div>
  );
};

export default App;
