import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  nav: {
    display: 'flex',
    padding: '3rem 0',
  },
});

export type NavProps = {
  children: React.ReactNode;
};

const Nav: React.FC<NavProps> = ({ children }) => {
  return <nav {...stylex.props(styles.nav)}>{children}</nav>;
};

export { Nav };
