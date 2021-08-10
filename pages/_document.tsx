import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class Document extends NextDocument {
  render() {
    return (
      <Html className="dark-theme">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Biryani:wght@900&family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        </body>
      </Html>
    )
  }
}

export default Document