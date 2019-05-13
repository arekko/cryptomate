import React from "react";
import { NewsServiceConsumer } from "../providers";

export const withNewsService = () => (Wrapped: any) => {
  return (props: any) => (
    <NewsServiceConsumer>
      {newsApiService => <Wrapped {...props} newsApiService={newsApiService} />}
    </NewsServiceConsumer>
  );
};
