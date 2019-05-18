import {
  FETCH_CRYPTO_FAILURE,
  FETCH_CRYPTO_REQUEST,
  FETCH_CRYPTO_SUCCESS
} from "../constants/reduxTypes";
import { CryptoApiService } from "../services";
export const cryptoRequested = () => ({ type: FETCH_CRYPTO_REQUEST });

export const cryptoLoaded = (data: any) => ({
  type: FETCH_CRYPTO_SUCCESS,
  payload: data
});

export const cryptoFailed = (error: any) => ({
  type: FETCH_CRYPTO_FAILURE,
  payload: error
});

const fetchCryptoData = (cryptoService: CryptoApiService) => () => async (
  dispatch: any
) => {
  dispatch(cryptoRequested());
  try {
    const data = await cryptoService.getData();
    dispatch(cryptoLoaded(data.data.Data));
  } catch (err) {
    dispatch(cryptoFailed(err));
  }
};

export { fetchCryptoData };
