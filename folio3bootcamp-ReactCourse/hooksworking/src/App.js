import React from "react";
import { useState, useRef, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";


export const dataContext = createContext(null);

const App = () => {
  const [data, setData] = useState([]);
  const articleNameRef = useRef();
  const articleNumberRef = useRef();
  const handleClick = () => {
    const name = articleNameRef.current.value;
    const number = articleNumberRef.current.value;
    setData([
      {
        articleNumber: number,
        articleName: name,
      },
    ]);
  };

  return (
    <dataContext.Provider value={data}>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="articlenumber" className="form-label">
            Article Number
          </label>
          <input
            type="number"
            className="form-control"
            id="articlenumber"
            ref={articleNumberRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="articlenumber" className="form-label">
            Article Name
          </label>
          <input
            type="text"
            className="form-control"
            id="articlenumber"
            ref={articleNameRef}
          />
        </div>
        <button className="btn btn-primary mt-2" onClick={handleClick}>
          Add Data
        </button>
        <Home />
      </div>
    </dataContext.Provider>
  );
};

export default App;
