import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* eslint-disable-next-line */}

          <meta charSet="utf-8" />

          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches&display=optional"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
