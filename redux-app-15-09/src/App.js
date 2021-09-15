import Home from './Home';
import { useSelector, useDispatch} from 'react-redux';
import { connect } from "react-redux";
import { useState } from 'react';

function App(props) {
  console.log(props)
  const [text, setText] = useState('');
  // console.log(props)
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter)
  const myText = useSelector(state => state.text) 

  return (
      <div style={{ textAlign: 'center'}}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => dispatch({ type: "ADD", payload: text})}>ADD</button>
        <h1>{myText}</h1>
        <h1>{counter}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 5})}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT"})}>-</button>
      </div>
    );
}

function mapStateToProps(state) {
  return { counter : state.counter }
}

// connect(mapStateToProps)()
export default connect(mapStateToProps)(App);