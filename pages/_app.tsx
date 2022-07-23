import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/App/Layout";
import { fetchAPI } from "../utils/utils";
import { GetStaticProps } from "next/types";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

MyApp.getInitialProps = async () => {
  const jobs = await fetchAPI("/jobs", { populate: "*" });

  // Pass the data to our page via props
  return {
    pageProps: {
      jobs: jobs.data,
    },
    revalidate: 1,
  };
};
