import { combineReducers } from "redux";
import randomReducer from "./randomReducer";

export default combineReducers({
  randomReducer: randomReducer,
});
