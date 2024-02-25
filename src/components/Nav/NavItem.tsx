import { Link, type LinkProps } from 'components/Link';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  navItem: {
    marginRight: '2rem',
  },
});

export type NavItemProps = LinkProps;

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <div {...stylex.props(styles.navItem)}>
      <Link {...props} />
    </div>
  );
};

export { NavItem };
