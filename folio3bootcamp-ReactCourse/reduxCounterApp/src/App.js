import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { increment, decrement, reset } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

const App = (props) => {
  console.log(props.count);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div className="container">
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(increment(1))}
        className="btn btn-primary"
      >
        +
      </button>
      <button onClick={() => dispatch(decrement(1))} className="btn btn-danger">
        -
      </button>
      <button onClick={() => dispatch(reset())} className="btn btn-danger">
        Reset
      </button>
      <Home />

      {/* <h2>Enter a number.</h2>
      <input value={num} onChange={(e) => setNum(e.target.value)} />
      <div>
        The factorial of {num} is {calculatedFactorial}.
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  // const { count } = state;
  // console.log(count);
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(App);
