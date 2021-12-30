import React from "react";
import { useState, useReducer, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

export const dataContext = createContext(null);

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [data, setData] = useState([]);
  // const articleNameRef = useRef();
  // const articleNumberRef = useRef();
  // const handleClick = () => {
  //   const name = articleNameRef.current.value;
  //   const number = articleNumberRef.current.value;
  //   setData([
  //     {
  //       articleNumber: number,
  //       articleName: name,
  //     },
  //   ]);
  // };

  // const [num, setNum] = useState(0);

  // const getFactorial = (x) => {
  //   console.log(`x is ${x}. In getFactorial.`);
  //   if (x === 0) {
  //     return 1;
  //   }
  //   return x * getFactorial(x - 1);
  // };

  // const calculatedFactorial = useMemo(() => {
  //   return num ? getFactorial(num) : 0;
  // }, [num]);

  return (
    <div className="container">
      <h1>{state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn btn-primary"
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn btn-danger"
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn btn-danger"
      >
        Reset
      </button>
      {/* <h2>Enter a number.</h2>
      <input value={num} onChange={(e) => setNum(e.target.value)} />
      <div>
        The factorial of {num} is {calculatedFactorial}.
      </div> */}
    </div>
    // <dataContext.Provider value={data, [1,2,3]}>
    //   <div className="container">
    //     <div className="mb-3">
    //       <label htmlFor="articlenumber" className="form-label">
    //         Article Number
    //       </label>
    //       <input
    //         type="number"
    //         className="form-control"
    //         id="articlenumber"
    //         ref={articleNumberRef}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="articlenumber" className="form-label">
    //         Article Name
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="articlenumber"
    //         ref={articleNameRef}
    //       />
    //     </div>
    //     <button className="btn btn-primary mt-2" onClick={handleClick}>
    //       Add Data
    //     </button>
    //     <Home />
    //   </div>
    // </dataContext.Provider>
  );
};

export default App;
