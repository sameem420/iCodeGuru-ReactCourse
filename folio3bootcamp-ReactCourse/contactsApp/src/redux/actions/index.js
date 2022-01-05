export const createContact = (val) => {
  return {
    type: "CREATE_CONTACT",
    payload: val,
  };
};

export const deleteContact = (index) => {
  return {
    type: "DELETE_CONTACT",
    payload: index,
  };
};
