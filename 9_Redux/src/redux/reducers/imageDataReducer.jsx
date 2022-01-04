const INITIAL_STATE = {
  imageUrl: "",
};

function imageDataReducer(state = INITIAL_STATE, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LOADIMAGE": {
      return {
        ...state,
        imageUrl: action.payload,
      };
    }
  }

  return state;
}

export default imageDataReducer;

export const getCatImage = () => (dispatch) => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "LOADIMAGE",
        payload: data[0].url,
      });
    });
};
