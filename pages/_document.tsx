import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class Document extends NextDocument {
  render() {
    return (
      <Html className="dark-theme">
        <Head />
        <body>
          <span id="loader" />
          <Main />
          <NextScript />
          <Script
            noModule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          />
        </body>
      </Html>
    );
  }
}

export default Document;
