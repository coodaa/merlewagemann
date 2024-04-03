// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Füge globale Metatags und Ressourcen wie CSS-Dateien, Favicons usw. hier ein */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          {/* Andere globale Ressourcen */}
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
