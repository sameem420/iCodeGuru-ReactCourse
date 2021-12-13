import { useState } from "react";
import Home from './Home';
import { useSelector, useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter) 

  return (
      <div style={{ textAlign: 'center'}}>
        {/* <Home Name={Name} /> */}
        <h1>{counter}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT"})}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT"})}>-</button>
      </div>
    );
}

export default App;