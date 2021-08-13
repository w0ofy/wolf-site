import { useState } from 'react';
import { Button } from 'components/Button/Button';

const ThemeSwitcher = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const handleThemeToggle = () => {
    const classList = document.querySelector('html')?.classList;
    classList?.toggle('dark-theme');
    setDarkTheme(!classList?.contains('dark-theme'));
  };

  return (
    <Button
      onClick={handleThemeToggle}
      icon={darkTheme ? 'contrast-outline' : 'contrast'}
      {...props}
    />
  );
};

export { ThemeSwitcher };
