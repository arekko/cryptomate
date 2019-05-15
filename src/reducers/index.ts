import { combineReducers } from "redux";
import cryptoReducer from "./cryptoReducer";
import newsReducer from "./newsReducer";

export default combineReducers({
  news: newsReducer,
  crypto: cryptoReducer
});
