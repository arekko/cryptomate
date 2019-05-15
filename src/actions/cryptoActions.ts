import { CryptoApiService } from "../services";
import {
  FETCH_CRYPTO_FAILURE,
  FETCH_CRYPTO_REQUEST,
  FETCH_CRYPTO_SUCCESS
} from "./../constants/actionTypes";

export const cryptoRequested = () => ({ type: FETCH_CRYPTO_REQUEST });

export const cryptoLoaded = (data: any) => ({
  type: FETCH_CRYPTO_SUCCESS,
  payload: data
});

export const newsError = (error: any) => ({
  type: FETCH_CRYPTO_FAILURE,
  payload: error
});

const fetchCryptoData = (cryptoService: CryptoApiService) => () => (
  dispatch: any
) => {
  dispatch(cryptoRequested());
  cryptoService
    .getData()
    .then((data: any) => dispatch(cryptoLoaded(data.data.Data)));
};

export { fetchCryptoData };
