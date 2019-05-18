export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

export const FETCH_CRYPTO_REQUEST = "FETCH_CRYPTO_REQUEST";
export const FETCH_CRYPTO_SUCCESS = "FETCH_CRYPTO_SUCCESS";
export const FETCH_CRYPTO_FAILURE = "FETCH_CRYPTO_FAILURE";

export interface NewsState {
  news: [];
  loading: boolean;
  error: null | any;
}

export interface CryptoState {
  crypto: [];
  loading: boolean;
  error: null | any;
}

interface NewsRequested {
  type: typeof FETCH_NEWS_REQUEST;
  payload?: null;
}

interface NewsLoaded {
  type: typeof FETCH_NEWS_SUCCESS;
  payload?: any;
}

interface NewsError {
  type: typeof FETCH_NEWS_FAILURE;
  payload?: any;
}

export type NewsActionTypes = NewsRequested | NewsError | NewsLoaded;
