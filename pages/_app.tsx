import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/App/Layout";
import { fetchAPI } from "./utils/utils";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout jobs={pageProps.jobs}>
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
