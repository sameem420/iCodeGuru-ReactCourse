import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Invoices from "./components/Invoices";
import Navbar from "./components/Navbar";
import Invoice from "./components/Invoice";

const App = () => {
  let navigate = useNavigate();
  console.log(navigate);
  // useEffect(() => {
  //   navigate("/invoices");
  // }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h1>404 - Page Not Found</h1>
              <button onClick={() => navigate(-1)}>Go TO HOME</button>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
