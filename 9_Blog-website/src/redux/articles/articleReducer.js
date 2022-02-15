const INITIAL_STATE = {
  articles: [],
};

function articleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_ARTICLE": {
      const newArr = [...state.articles];
      newArr.unshift(action.payload);
      return { articles: newArr };
    }
    case "LOAD_ARTICLES": {
      return {
        ...state,
        articles: action.payload,
      };
    }
  }
  return state;
}

export default articleReducer;

export const getArticles = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((respons) => respons.json())
    .then((data) => {
      dispatch({
        type: "LOAD_ARTICLES",
        payload: data,
      });
    });
};
