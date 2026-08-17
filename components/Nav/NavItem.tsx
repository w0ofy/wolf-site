import { Link, type LinkProps } from 'components/Link';
import * as styles from './NavItem.css';

export type NavItemProps = LinkProps;

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <div className={styles.navItem}>
      <Link {...props} />
    </div>
  );
};

export { NavItem };
