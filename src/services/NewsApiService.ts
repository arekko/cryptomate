import axios from "axios";

export default class NewsApiService {
  private API_KEY = "";
  private URL = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${
    this.API_KEY
  }`;

  getNews() {
    return axios(this.URL);
  }
}
