import { NewsActionTypes, NewsState } from "../constants/reduxTypes";
import { createReducer, updateObject } from "./reducerUtilities";

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null
};

const fetchNewsRequest = (state: NewsState) =>
  updateObject(state, {
    loading: true,
    error: null
  });

const fetchNewsSuccess = (
  state: NewsActionTypes,
  { payload }: NewsActionTypes
) =>
  updateObject(state, {
    news: payload,
    loading: false,
    error: null
  });

const fetchNewsFailure = (
  state: NewsActionTypes,
  { payload }: NewsActionTypes
) =>
  updateObject(state, {
    loading: false,
    error: payload
  });

export default createReducer(initialState, {
  FETCH_NEWS_REQUEST: fetchNewsRequest,
  FETCH_NEWS_SUCCESS: fetchNewsSuccess,
  FETCH_NEWS_FAILURE: fetchNewsFailure
});
