import React from 'react';
import styles from './Nav.module.scss';

export type NavProps = {
  children: React.ReactNode;
};

const Nav = ({ children }: NavProps) => {
  return <nav className={styles.nav}>{children}</nav>;
};

export { Nav };
