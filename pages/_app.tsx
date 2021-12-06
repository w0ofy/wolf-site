import { globalStyles } from 'styles/styles';
import type { AppProps } from 'next/app';

import { useNProgress } from 'hooks/useNProgress';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  useNProgress();

  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}

export default App;
