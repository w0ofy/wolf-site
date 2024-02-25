'use client';

import { Logo } from 'components/Logo';
import { ThemeSwitcher } from './Theme';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3rem 3rem 0',
    width: '100%',
    height: 'auto',
  },
});

const Header = () => {
  return (
    <header {...stylex.props(styles.header)}>
      <Logo width={60} />
      <ThemeSwitcher style={{ alignSelf: 'flex-start' }} />
    </header>
  );
};

export { Header };
