import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS
} from "./../constants/actionTypes";
const initialState = {
  news: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_NEWS_SUCCESS:
      return {
        news: payload,
        loading: false,
        error: null
      };
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default reducer;
