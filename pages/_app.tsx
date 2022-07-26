import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/App/Layout";
import { fetchAPI } from "../utils/utils";
import { GetStaticProps } from "next/types";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
