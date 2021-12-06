import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

/**
 * @todo refactor to use InlineScript component
 */
class Document extends NextDocument {
  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <script
            id="init-theme"
            dangerouslySetInnerHTML={{
              __html: `(function () {
              const cl = document?.querySelector("html")?.classList;
              const initialPreset =
                window.localStorage.getItem('themikewolf-theme') || 'dark';
              cl?.add(initialPreset);
            })();`,
            }}
          />
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
