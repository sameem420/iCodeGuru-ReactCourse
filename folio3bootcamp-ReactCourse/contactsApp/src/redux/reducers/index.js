export const contactReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "CREATE_CONTACT":
      return [...state, action.payload];
    case "DELETE_CONTACT":
      return state.filter((contact, index) => index !== action.payload);
    default:
      return state;
  }
};
