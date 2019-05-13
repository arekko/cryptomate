import React from "react";
import { NewsApiService } from "../services";

const {
  Provider: NewsServiceProvider,
  Consumer: NewsServiceConsumer
} = React.createContext<NewsApiService | null>(null);

export { NewsServiceProvider, NewsServiceConsumer };
