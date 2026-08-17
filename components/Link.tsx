import NextLink from 'next/link';
import { Icon, IconProps } from 'components/Icon';
import { cx } from 'utils/cx';
import * as styles from './Link.css';

const VARIANTS = ['link', 'button', 'heading'] as const;

type LinkVariant = (typeof VARIANTS)[number];
type LinkToProps = { href?: never; to: string } | { href: string; to?: never };

export type LinkProps = {
  target?: React.HTMLAttributeAnchorTarget;
  variant?: LinkVariant;
} & LinkToProps &
  React.HTMLAttributes<HTMLAnchorElement> &
  Partial<Pick<IconProps, 'icon'>>;

const Link: React.FC<LinkProps> = ({
  href,
  to,
  children,
  variant = 'link',
  icon,
  className,
  ...moreProps
}) => {
  const linkTo = (to as string) || (href as string);
  const restProps = to
    ? moreProps
    : { ...moreProps, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <NextLink
      href={linkTo}
      className={cx(styles.variant[variant], className)}
      {...restProps}
    >
      {icon && <Icon icon={icon} />}
      {children && children}
    </NextLink>
  );
};

export { Link };
