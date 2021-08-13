import 'normalize.css';
import 'styles/globals.scss';
import 'nprogress/nprogress.css';
import type { AppProps } from 'next/app';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return <Component {...pageProps} />;
}
export default App;
