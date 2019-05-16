import { NewsApiService } from "../services";
import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS
} from "./../constants/actionTypes";

export const newsRequested = () => ({ type: FETCH_NEWS_REQUEST });

export const newsLoaded = (news: any) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news
});

export const newsError = (error: any) => ({
  type: FETCH_NEWS_FAILURE,
  payload: error
});

const fetchNewsOld = (newsApiService: NewsApiService, dispatch: any) => () => {
  dispatch(newsRequested());
  newsApiService
    .getNews()
    .then((data: any) => dispatch(newsLoaded(data.data.articles)));
};

const fetchNews = (newsApiService: NewsApiService) => () => (dispatch: any) => {
  dispatch(newsRequested());
  newsApiService
    .getNews()
    .then((data: any) => dispatch(newsLoaded(data.data.articles)));
};

export { fetchNews };
