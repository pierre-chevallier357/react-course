import { createStore, combineReducers } from "redux";
import CounterReducer from "./reducers/CounterReducer";
import AddCartReducer from "./reducers/AddCartReducer";

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer,
});

const store = createStore(rootReducer);

export default store;
