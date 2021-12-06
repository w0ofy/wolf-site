import React, { useState } from 'react';
import { Button } from 'components/Button';
import {
  LOCAL_THEME_KEY,
  DARK_CLASS,
  LIGHT_CLASS,
  ThemeClasses,
} from './constants';

const switchThemeFrom = (from: ThemeClasses) => {
  const classList = document.querySelector('html')?.classList;
  return {
    to: (to: ThemeClasses) => {
      localStorage.setItem(LOCAL_THEME_KEY, to);
      classList?.add(to);
      classList?.remove(from);
    },
  };
};

const makeThemeUtils = (
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  const classList = document.querySelector('html')?.classList;
  const isDark = classList?.contains(DARK_CLASS);
  const toggleTheme = () => {
    if (isDark) {
      switchThemeFrom(DARK_CLASS).to(LIGHT_CLASS);
      setState(LIGHT_CLASS);
    } else {
      switchThemeFrom(LIGHT_CLASS).to(DARK_CLASS);
      setState(DARK_CLASS);
    }
  };

  return {
    classList,
    toggleTheme,
    isDark,
  };
};

const ThemeSwitcher = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem(LOCAL_THEME_KEY) || 'dark'
  );

  const handleThemeToggle = () => {
    const { toggleTheme } = makeThemeUtils(setTheme);
    toggleTheme();
  };

  const isDark = theme === DARK_CLASS;

  return (
    <Button
      onClick={handleThemeToggle}
      icon={isDark ? 'contrast-outline' : 'contrast'}
      {...props}
    />
  );
};

export default ThemeSwitcher;
