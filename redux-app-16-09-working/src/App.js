import Home from './Home';
import { useSelector, useDispatch} from 'react-redux';
import { connect } from "react-redux";
import { useState } from 'react';
import { incCounter } from './store/actions/counterAction';

function App(props) {
  console.log(props)
  const [userText, setUserText] = useState('');
  // console.log(props)
  const dispatch = useDispatch();

  const { counter } = useSelector(state => state.counter)
  console.log(counter);
  const { text } = useSelector(state => state.text)
  console.log(text) 

  return (
      <div style={{ textAlign: 'center'}}>
        <input type="text" value={userText} onChange={(e) => setUserText(e.target.value)} />
        <button onClick={() => dispatch({ type: "ADD", payload: userText})}>ADD</button>
        <h1>{text}</h1>
        <h1>{counter}</h1>
        <button onClick={props.incCounter(5)}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT"})}>-</button>
      </div>
    );
}

// function mapStateToProps(state) {
//   return { 
//     counter : state.counter,
//     text : state.text
//    }
// }

// function mapDispatchToProps(dispatch) {
//   return {

//   }
// }


// connect(mapStateToProps)()
export default connect(null, { incCounter })(App);