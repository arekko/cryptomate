import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  NewsActionTypes
} from "../constants/reduxTypes";
import { NewsApiService } from "../services";

export const newsRequested = (): NewsActionTypes => ({
  type: FETCH_NEWS_REQUEST
});

export const newsLoaded = (news: any): NewsActionTypes => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news
});

export const newsError = (error: any): NewsActionTypes => ({
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
