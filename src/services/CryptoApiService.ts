import axios from "axios";

export default class CryptoApiService {
  private cryptoKEY =
    "d9fea2061507b66f596a9d9398dde6153b96d0414918c6be463d8d1696d2ea16";
  private topByMarketCapUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${
    this.cryptoKEY
  }`;

  getData() {
    return axios(this.topByMarketCapUrl);
  }
}
