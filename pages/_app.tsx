import 'styles/global.css';

import type { AppProps } from 'next/app';
import { PagesProgressBar } from 'next-nprogress-bar';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <PagesProgressBar
        color="var(--font-color)"
        height="2px"
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
