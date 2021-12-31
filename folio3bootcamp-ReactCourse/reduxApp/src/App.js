import React from "react";
import { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
// import { dataContext } from "./context";

// const initialState = {
//   count: 0,
// };

// function counterReducer(state = initialState, action) {
//   console.log(action);
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + action.payload };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };
//     default:
//       return state;
//   }
// }

const App = () => {
  // const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <dataContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <h1>{state.count}</h1>
        <button
          onClick={() => dispatch({ type: "increment", payload: 1 })}
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
        <Home />

        {/* <h2>Enter a number.</h2>
      <input value={num} onChange={(e) => setNum(e.target.value)} />
      <div>
        The factorial of {num} is {calculatedFactorial}.
      </div> */}
      </div>
    </dataContext.Provider>
  );
};

export default App;
