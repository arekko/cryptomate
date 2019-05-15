import React from "react";
import { CryptoApiService } from "../services";

const {
  Provider: CryptoServiceProvider,
  Consumer: CryptoServiceConsumer
} = React.createContext<CryptoApiService | null>(null);

export { CryptoServiceProvider, CryptoServiceConsumer };
