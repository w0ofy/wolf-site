import * as styles from './Nav.css';

export type NavProps = {
  children: React.ReactNode;
};

const Nav: React.FC<NavProps> = ({ children }) => {
  return <nav className={styles.nav}>{children}</nav>;
};

export { Nav };
