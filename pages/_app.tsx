import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Footer from "../components/App/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          description: "Fresh Dublin Hospitality jobs offers",
          site_name: "Dublin hospitality jobs",
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
