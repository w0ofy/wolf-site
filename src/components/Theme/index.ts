'use client';

import dynamic from 'next/dynamic';

const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
  ssr: false,
});

export { ThemeSwitcher };
export * from './constants';
