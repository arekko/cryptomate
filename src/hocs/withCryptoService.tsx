import React from "react";
import { CryptoServiceConsumer } from "../providers";

export const withCryptoService = () => (Wrapped: any) => {
  return (props: any) => (
    <CryptoServiceConsumer>
      {cryptoService => <Wrapped {...props} cryptoService={cryptoService} />}
    </CryptoServiceConsumer>
  );
};
