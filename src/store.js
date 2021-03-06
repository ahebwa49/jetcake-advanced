import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import thunk from "redux-thunk";

export const store = (state = {}) => {
  return createStore(rootReducer, state, applyMiddleware(thunk));
};
