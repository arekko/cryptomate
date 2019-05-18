import { createReducer, updateObject } from "./reducerUtilities";

const initialState = {
  crypto: [],
  loading: false,
  error: null
};

const fetchCryptoRequest = (state: any) =>
  updateObject(state, {
    loading: true,
    error: null
  });

const fetchCryptoSuccess = (state: any, { payload }: any) =>
  updateObject(state, {
    crypto: payload,
    loading: false,
    error: null
  });

const fetchCryptoFailure = (state: any, { payload }: any) =>
  updateObject(state, {
    loading: false,
    error: payload
  });

export default createReducer(initialState, {
  FETCH_CRYPTO_REQUEST: fetchCryptoRequest,
  FETCH_CRYPTO_SUCCESS: fetchCryptoSuccess,
  FETCH_CRYPTO_FAILURE: fetchCryptoFailure
});
