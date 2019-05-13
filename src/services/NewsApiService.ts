import axios from "axios";

export default class NewsApiService {
  private API_KEY = "2cda9e9005464b6987b4799fe7311336";
  private URL = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${
    this.API_KEY
  }`;

  getNews() {
    return axios(this.URL);
  }
}
