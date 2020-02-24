import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { errorMessageReducer } from "./errorMessageReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  error: errorMessageReducer
});
