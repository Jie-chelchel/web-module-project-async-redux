import { combineReducers } from "redux";
import randomReducer from "./randomReducer";
import searchNameReducer from "./searchNameReducer";
export default combineReducers({
  randomReducer: randomReducer,
  searchNameReducer: searchNameReducer,
});
