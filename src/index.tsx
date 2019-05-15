import * as React from "react";
import { Provider } from "react-redux";
import Navigation from "./navigation";
import { NewsServiceProvider, CryptoServiceProvider } from "./providers";
import { NewsApiService, CryptoApiService } from "./services";
import store from "./store";

const newsApiService = new NewsApiService();
const cryptoService = new CryptoApiService()

export const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
    <CryptoServiceProvider value={cryptoService}>
      <NewsServiceProvider value={newsApiService}>
        <Navigation />
      </NewsServiceProvider>
    </CryptoServiceProvider>
    </Provider>
  );
};
