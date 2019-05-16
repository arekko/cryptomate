import {
  FETCH_CRYPTO_FAILURE,
  FETCH_CRYPTO_REQUEST,
  FETCH_CRYPTO_SUCCESS
} from "./../constants/actionTypes";

const updateObject = (oldValue: object, newValue: object) => ({
  ...oldValue,
  ...newValue
});

const initialState = {
  crypto: [],
  loading: false,
  error: null
};

export default (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CRYPTO_SUCCESS:
      return updateObject(state, {
        crypto: payload,
        loading: false,
        error: null
      });
    case FETCH_CRYPTO_REQUEST:
      return updateObject(state, {
        loading: true,
        error: null
      });
    case FETCH_CRYPTO_FAILURE:
      return updateObject(state, {
        loading: false,
        error: payload
      });

    default:
      return state;
  }
};
