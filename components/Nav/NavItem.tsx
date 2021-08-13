import { Link, LinkProps } from 'components/Link';
import styles from './Nav.module.scss';

export type NavItemProps = LinkProps;

const NavItem = (props: NavItemProps) => {
  return (
    <div className={styles['nav-item']}>
      <Link {...props} />
    </div>
  );
};

export { NavItem };
