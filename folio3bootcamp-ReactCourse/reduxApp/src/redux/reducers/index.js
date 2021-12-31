const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};
