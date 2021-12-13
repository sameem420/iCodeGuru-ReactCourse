const initialState = {
    counter: 0 
  }
   
const counterReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return { counter: state.counter + action.payload}
      case 'DECREMENT':
        return { counter: state.counter - 1}
      default:
        return state;    
    }
}

export default counterReducer;