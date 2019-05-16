import axios from "axios";

export default class CryptoApiService {
  private cryptoKEY =
    "d9fea2061507b66f596a9d9398dde6153b96d0414918c6be463d8d1696d2ea16";
  private topByMarketCapUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${
    this.cryptoKEY
  }`;
  private chartDataUrl = "https://min-api.cryptocompare.com/data/histohour";

  getData() {
    return axios(this.topByMarketCapUrl);
  }

  getChartData(fromCoin: string, toCurr: string, limit: number) {
    const options = {
      params: {
        fsym: fromCoin,
        tsym: toCurr,
        limit
      }
    };

    return axios(this.chartDataUrl, options);
    // https://min-api.cryptocompare.com/data/histohour?fsym=ETH&tsym=USD&limit=9
  }
}
