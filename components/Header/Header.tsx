import { useState } from 'react';
import styles from 'styles/Home.module.scss';
import { Logo } from 'components/Logo';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const handleThemeToggle = () => {
    const classList = document.querySelector('html')?.classList;
    classList?.toggle('dark-theme');
    setDarkTheme(!classList?.contains('dark-theme'));
  };

  return (
    <header className={styles.header}>
      <Logo width={60} />
      <ThemeSwitcher style={{ alignSelf: 'flex-start' }} />
    </header>
  );
};

export { Header };
