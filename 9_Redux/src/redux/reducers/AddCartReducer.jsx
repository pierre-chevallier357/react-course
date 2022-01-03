const INITIAL_STATE = {
  cart: 1000,
};

function AddCartReducer(state = INITIAL_STATE, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADDCART": {
      return {
        ...state,
        cart: action.payload,
      };
    }
  }

  return state;
}

export default AddCartReducer;
