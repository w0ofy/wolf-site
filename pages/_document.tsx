import { InlineScript } from 'components/InlineScript';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <InlineScript>
            {() => {
              (function () {
                const cl = document?.querySelector('html')?.classList;
                const initialPreset =
                  window.localStorage.getItem('themikewolf-theme') || 'dark';
                cl?.add(initialPreset);
              })();
            }}
          </InlineScript>
        </Head>
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
