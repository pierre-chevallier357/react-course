import { createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "./reducers/counterReducer";
import addCartReducer from "./reducers/addCartReducer";
import thunk from "redux-thunk";
import imageDataReducer from "./reducers/imageDataReducer";

const rootReducer = combineReducers({
  counterReducer,
  addCartReducer,
  imageDataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
