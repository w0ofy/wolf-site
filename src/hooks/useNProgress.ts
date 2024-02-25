import 'nprogress/nprogress.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({
  showSpinner: false,
});

function useNProgress() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
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

  return NProgress;
}

export { useNProgress };
