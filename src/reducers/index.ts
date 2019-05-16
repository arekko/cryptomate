import { combineReducers } from "redux";
import cryptoReducer from "./cryptoReducer";
import newsReducer from "./newsReducer";

export const rootReducer = combineReducers({
  news: newsReducer,
  crypto: cryptoReducer
});
