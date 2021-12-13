const initialState = {
    text: '' 
  }
   
const textReducer = (state = '', action) => {
    switch(action.type) {
      case 'ADD':
        return { text: state.text + action.payload}
      default:
        return state;    
    }
}

export default textReducer;