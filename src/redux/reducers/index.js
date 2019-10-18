import { combineReducers } from "redux";
import comments from "./commentReducer";
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  comments,
  authors,
  apiCallsInProgress
});

export default rootReducer;
