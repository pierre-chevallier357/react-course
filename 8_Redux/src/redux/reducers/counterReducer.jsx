const INITIAL_STATE = {
  count: 100,
};

function counterReducer(state = INITIAL_STATE, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "INCR": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "DECR": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
  }

  return state;
}

export default counterReducer;
