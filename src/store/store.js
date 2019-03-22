import {applyMiddleware, createStore} from "redux";
import lessonsReducer from "./lessons/lessons.reducer";
import thunk from "redux-thunk";

const state = {};

const store = createStore(
  lessonsReducer,
  state,
  applyMiddleware(thunk)
);

export default store;