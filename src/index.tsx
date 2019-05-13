import * as React from "react";
import { Provider } from "react-redux";
import Navigation from "./navigation";
import { NewsServiceProvider } from "./providers";
import { NewsApiService } from "./services";
import store from "./store";

const newsApiService = new NewsApiService();

export const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <NewsServiceProvider value={newsApiService}>
        <Navigation />
      </NewsServiceProvider>
    </Provider>
  );
};
