import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  counter: 0 
}
 
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1}
    case 'DECREMENT':
      return { counter: state.counter - 1}
    default:
      return state;    
  }
}

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

