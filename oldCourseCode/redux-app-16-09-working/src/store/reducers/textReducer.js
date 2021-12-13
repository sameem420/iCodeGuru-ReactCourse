const initialState = {
    text: '' 
  }
   
const textReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD':
        return { 
            ...state,
            text: state.text + action.payload
        }
      default:
        return state;    
    }
}

export default textReducer;