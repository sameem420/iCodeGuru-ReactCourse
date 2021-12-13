import {useState, createContext, useReducer, useRef, useMemo} from 'react';
import './App.css';
import Home from './Home';

const useCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const incrementByValue = (value) => setCount(count + value);
  return { count, increment, decrement, incrementByValue };
}





let Name = "Ali";
// const initialState = {
//   counter : 0,
//   Name : ''
// }
const favNumberContext = createContext(0);
 
// const counterReducer = (state = 0, action) => {
//   switch(action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "INCREMENT":
//         return state + 1;  
//     default:
//       return state;  
//   }
// }


function App() {
  const [favNumber, setFavNumber] = useState(0);
  const { count, increment, decrement, incrementByValue } = useCount();

  const inputRef = useRef();
  // const [counter, dispatch] = useReducer(counterReducer, 0);
  const data = {
    Name,
    favNumber,
    setFavNumber
  }

  const favNumberMemo = useMemo(() => favNumber ** 2, [favNumber])

  const handleClick = () => {
    const value = inputRef.current.value;
    console.log(value);
    setFavNumber(value);
  }

  return (
    <favNumberContext.Provider value={data}>
    <div className="App">
      {/* <h1>{favNumberMemo}</h1> */}
      <h1>{count}</h1>
      {/* <h1>{favNumber}</h1> */}
      <input type="text" ref={inputRef} />
      <button onClick={() => incrementByValue(20)}>Update Number</button>
      
      {/* <button onClick={() => setFavNumber(12)}>Update Favorite Number</button> */}
      <Home />
    </div>
    </favNumberContext.Provider>
  );
}

export default App;
export { favNumberContext }